import {
  Box, Text, Heading, VStack, SimpleGrid, Button, useToast, Avatar, HStack, Icon
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { api } from '../lib/api';

const MotionBox = motion(Box);

export default function TestimonialsTeaser() {
  const [testimonials, setTestimonials] = useState([]);
  const toast = useToast();

  useEffect(() => {
    api.get('/testimonials')
      .then(res => setTestimonials(res.data.slice(0, 3)))
      .catch(() => toast({ title: 'Failed to load testimonials', status: 'error', duration: 3000 }));
  }, [toast]); // ✅ Added toast to dependency array

  return (
    <MotionBox
      w="100%"
      maxW="100%"
      px={{ base: 4, sm: 6, md: 10, xl: 20, '2xl': 32 }}
      py={{ base: 10, md: 16 }}
      bgGradient="linear(to-r, ivory.100, gold.50)"
      borderRadius="xl"
      boxShadow="lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <VStack spacing={8} align="start">
        <Heading fontSize={{ base: '2xl', md: '4xl', xl: '5xl' }} color="gold.500" fontFamily="heading">
          What Our Clients Say
        </Heading>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 4, md: 6, xl: 10 }} w="100%">
          {testimonials.map((t, index) => (
            <MotionBox
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              p={6}
              borderWidth="1px"
              borderRadius="xl"
              boxShadow="md"
              bg="white"
            >
              <Text fontSize={{ base: 'sm', md: 'md' }} fontStyle="italic">“{t.message}”</Text>
              <HStack mt={4} spacing={3}>
                <Avatar name={t.name} size="sm" />
                <VStack align="start" spacing={0}>
                  <Text fontSize="sm" fontWeight="bold" color="gray.700">— {t.name}</Text>
                  <HStack spacing={1}>
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} as={FaStar} color="gold.400" boxSize={3} />
                    ))}
                  </HStack>
                </VStack>
              </HStack>
            </MotionBox>
          ))}
        </SimpleGrid>

        <Button
          as={RouterLink}
          to="/testimonials"
          bg="gold.500"
          color="white"
          _hover={{ bg: 'gold.600' }}
          size="lg"
        >
          Read All Testimonials
        </Button>
      </VStack>
    </MotionBox>
  );
}
