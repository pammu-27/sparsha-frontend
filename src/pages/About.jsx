import {
  Box, Heading, Text, VStack, Image, SimpleGrid, Link, Divider
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function AboutUs() {
  return (
    <MotionBox
      px={{ base: 4, sm: 6, md: 10, xl: 20, '2xl': 32 }}
      py={{ base: 6, sm: 10, md: 16, xl: 20 }}
      maxW="100%"
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
        {/* Company Overview */}
        <Box>
          <Heading
            fontSize={{ base: '3xl', md: '4xl', xl: '5xl' }}
            color="gold.500"
            fontFamily="heading"
            fontWeight="semibold"
          >
            About Sparsha Interiors
          </Heading>
          <Text mt={4} fontSize={{ base: 'md', md: 'lg', xl: 'xl' }} lineHeight="tall">
            Founded in 2020 by Deepak, Sparsha Aluminium Fabrication & Plywood Interiors has grown into a trusted name in Moodbidri and beyond. Specializing in both aluminium and modular plywood interiors, we bring precision, elegance, and durability to every space we touch.
          </Text>
        </Box>

        <Divider borderColor="gold.500" />

        {/* Company History */}
        <Box>
          <Heading fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }} mb={3} color="gold.500" fontFamily="heading">🏗️ Our Journey</Heading>
          <Text fontSize={{ base: 'md', md: 'lg', xl: 'xl' }} lineHeight="tall">
            From a humble workshop in Kodyadka to full-scale interior projects across Karnataka, our journey reflects a commitment to quality and client trust. Every milestone has been shaped by hard work, innovation, and a passion for design.
          </Text>
        </Box>

        {/* Core Values */}
        <Box>
          <Heading fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }} mb={3} color="gold.500" fontFamily="heading">💡 Our Core Values</Heading>
          <Text fontSize={{ base: 'md', md: 'lg', xl: 'xl' }} lineHeight="tall">
            We value transparency, craftsmanship, and long-term relationships. Our team approaches every project with integrity, treating each space as a canvas for timeless design.
          </Text>
        </Box>

        {/* Client Promise */}
        <Box>
          <Heading fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }} mb={3} color="gold.500" fontFamily="heading">🤝 Our Promise</Heading>
          <Text fontSize={{ base: 'md', md: 'lg', xl: 'xl' }} lineHeight="tall">
            We promise clear communication, timely delivery, and premium finishes. Whether it’s a home renovation or a commercial build, we listen, collaborate, and deliver with excellence.
          </Text>
        </Box>

        {/* Call to Action */}
        <Box>
          <Heading fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }} mb={3} color="gold.500" fontFamily="heading">📞 Let’s Build Together</Heading>
          <Text fontSize={{ base: 'md', md: 'lg', xl: 'xl' }} lineHeight="tall">
            Ready to transform your space? Visit our{' '}
            <Link href="/contact" color="gold.500" fontWeight="semibold">Contact page</Link>{' '}
            to get started, or explore our{' '}
            <Link href="/gallery" color="gold.500" fontWeight="semibold">Gallery</Link>{' '}
            to see recent projects.
          </Text>
        </Box>

        {/* Team Photo Gallery */}
        <Box w="100%">
          <Heading fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }} mb={3} color="gold.500" fontFamily="heading">📸 Meet Our Team</Heading>
          <Text fontSize={{ base: 'md', md: 'lg', xl: 'xl' }} mb={4} lineHeight="tall">
            Our skilled technicians, designers, and project managers bring passion and precision to every build.
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, xl: 4 }} spacing={{ base: 4, md: 6, xl: 10 }}>
            <Image src="/images/team1.jpg" alt="Team member 1" borderRadius="xl" boxShadow="2xl" objectFit="cover" w="100%" h="auto" />
            <Image src="/images/team2.jpg" alt="Team member 2" borderRadius="xl" boxShadow="2xl" objectFit="cover" w="100%" h="auto" />
            <Image src="/images/team3.jpg" alt="Team member 3" borderRadius="xl" boxShadow="2xl" objectFit="cover" w="100%" h="auto" />
          </SimpleGrid>
        </Box>
      </VStack>
    </MotionBox>
  );
}
