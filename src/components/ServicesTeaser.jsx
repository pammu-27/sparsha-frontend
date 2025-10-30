import {
  Box, Heading, Text, VStack, SimpleGrid, Icon, Button
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaTools, FaPaintBrush, FaCouch, FaArrowRight } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

const highlights = [
  { icon: FaTools, title: 'Aluminium Fabrication', description: 'Durable setups for kitchens, wardrobes, partitions, and ceilings.' },
  { icon: FaPaintBrush, title: 'Plywood Interiors', description: 'Modular kitchens, wardrobes, and custom furniture with premium finishes.' },
  { icon: FaCouch, title: 'Design Consultation', description: 'Site visits, 3D planning, and expert guidance for your dream space.' },
];

export default function ServicesTeaser() {
  return (
    <Box
      w="100%"
      maxW="100%"
      px={{ base: 4, sm: 6, md: 10, xl: 20, '2xl': 32 }}
      py={{ base: 10, md: 16 }}
      bgGradient="linear(to-r, ivory.100, gold.50)"
      borderRadius="xl"
      boxShadow="lg"
    >
      <VStack spacing={8} align="start">
        <Heading fontSize={{ base: '2xl', md: '4xl', xl: '5xl' }} color="gold.500" fontFamily="heading">
          What We Offer
        </Heading>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, xl: 4 }} spacing={{ base: 4, md: 6, xl: 10 }} w="100%">
          {highlights.map((item, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              bg="white"
              borderRadius="xl"
              boxShadow="md"
              p={6}
              whileHover={{ scale: 1.05 }}
            >
              <Icon as={item.icon} boxSize={8} color="teal.500" mb={4} />
              <Text fontSize={{ base: 'md', md: 'lg', xl: 'xl' }} fontWeight="semibold" mb={2} color="charcoal.900">
                {item.title}
              </Text>
              <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600">
                {item.description}
              </Text>
            </MotionBox>
          ))}
        </SimpleGrid>

        <Button
          as={RouterLink}
          to="/services"
          rightIcon={<FaArrowRight />}
          bg="gold.500"
          color="white"
          _hover={{ bg: 'gold.600' }}
          size="lg"
          alignSelf="start"
        >
          Explore Full Services
        </Button>
      </VStack>
    </Box>
  );
}
