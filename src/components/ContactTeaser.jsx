import {
  Box, Heading, Text, VStack, Button
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

export default function ContactTeaser() {
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
      <VStack spacing={6} align="start">
        <Heading fontSize={{ base: '2xl', md: '4xl', xl: '5xl' }} color="gold.500" fontFamily="heading">
          Let’s Connect
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg', xl: 'xl' }} color="charcoal.900" lineHeight="tall">
          Whether you're planning a home renovation or a commercial build, we're here to help. We serve Moodbidri, Udupi, Mangalore, and surrounding areas with site visits, design consultation, and tailored quotes.
        </Text>
        <Button
          as={RouterLink}
          to="/contact"
          bg="gold.500"
          color="white"
          _hover={{ bg: 'gold.600' }}
          size="lg"
        >
          Contact Us
        </Button>
      </VStack>
    </MotionBox>
  );
}
