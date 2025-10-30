import {
  Box, Heading, Text, VStack, SimpleGrid, List, ListItem, ListIcon,
  Divider, Link, HStack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MotionBox = motion(Box);

export default function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <MotionBox
      px={{ base: 4, sm: 6, md: 10 }}
      py={{ base: 6, sm: 10, md: 16 }}
      maxW="7xl"
      mx="auto"
      bg="ivory.100"
      color="charcoal.900"
      borderRadius="xl"
      boxShadow="lg"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      fontFamily="body"
    >
      <VStack spacing={12} align="start">
        {/* Page Title */}
        <Box>
          <Heading fontSize={{ base: '3xl', md: '4xl' }} color="gold.500" fontFamily="heading">
            Our Services
          </Heading>
          <Text mt={4} fontSize={{ base: 'md', md: 'lg' }} lineHeight="tall">
            Sparsha Interiors offers premium aluminium and plywood interior solutions tailored for homes, offices, and commercial spaces. Every service is delivered with precision, durability, and design excellence.
          </Text>
        </Box>

        {/* Scroll Links */}
        <HStack spacing={6}>
          <Link href="#aluminium" color="gold.500" fontWeight="medium">🛠️ Aluminium</Link>
          <Link href="#plywood" color="gold.500" fontWeight="medium">🪵 Plywood</Link>
          <Link href="#consultation" color="gold.500" fontWeight="medium">🧠 Consultation</Link>
        </HStack>

        <Divider borderColor="gold.500" />

        {/* Aluminium Fabrication */}
        <Box id="aluminium" w="100%">
          <Heading fontSize="2xl" mb={4} color="gold.500" fontFamily="heading">
            🛠️ Aluminium Fabrication
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
            <List spacing={3}>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Kitchen Setups</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Cupboards</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Sliding Windows</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Glazing</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Fyber Doors</ListItem>
            </List>
            <List spacing={3}>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Partitions</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Fyber Ceilings</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Showcases</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Fall Ceilings</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> TV Showcases</ListItem>
            </List>
            <List spacing={3}>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Wardrobes</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Office Setups</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Wash Basin Setups</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Loft Setups</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> And More…</ListItem>
            </List>
          </SimpleGrid>
        </Box>

        {/* Plywood Interiors */}
        <Box id="plywood" w="100%">
          <Heading fontSize="2xl" mb={4} color="gold.500" fontFamily="heading">
            🪵 Plywood Interiors
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
            <List spacing={3}>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Modular Kitchens</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Wardrobes</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> TV Units</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Office Tables</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Dressing Tables</ListItem>
            </List>
            <List spacing={3}>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Crockery Units</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Study Tables</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Shoe Racks</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Partition Panels</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Custom Storage</ListItem>
            </List>
            <List spacing={3}>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Wall Cladding</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> False Ceilings</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Display Units</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> Premium Finishes</ListItem>
              <ListItem><ListIcon as={FaCheckCircle} color="gold.500" /> And More…</ListItem>
            </List>
          </SimpleGrid>
        </Box>

        {/* Design Consultation */}
        <Box id="consultation" w="100%">
          <Heading fontSize="2xl" mb={4} color="gold.500" fontFamily="heading">
            🧠 Design Consultation
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} lineHeight="tall">
            We offer personalized design consultation services including site visits, 3D planning, and material guidance. Our experts help you visualize your space and make informed decisions to achieve the perfect balance of style and function.
          </Text>
        </Box>
      </VStack>
    </MotionBox>
  );
}
