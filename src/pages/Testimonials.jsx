import { useEffect, useState } from 'react';
import {
  Box, Text, Heading, VStack, SimpleGrid, useToast
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { api } from '../lib/api';

const MotionBox = motion(Box);

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const toast = useToast();

  useEffect(() => {
    api.get('/testimonials')
      .then(res => setTestimonials(res.data))
      .catch(() => toast({ title: 'Failed to load testimonials', status: 'error', duration: 3000 }));
  }, []);

  return (
    <MotionBox
      w="100%"
      maxW="6xl"
      mx="auto"
      px={{ base: 4, sm: 6, md: 8 }}
      py={{ base: 6, sm: 8, md: 12 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Heading fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }} mb={6}>
        What Our Clients Say
      </Heading>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {testimonials.map((t) => (
          <Box
            key={t.id}
            p={{ base: 4, sm: 5 }}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            bg="gray.50"
          >
            <Text fontSize="md" fontStyle="italic">“{t.message}”</Text>
            <Text fontSize="sm" fontWeight="bold" mt={3} color="gray.700">
              — {t.name}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </MotionBox>
  );
}
