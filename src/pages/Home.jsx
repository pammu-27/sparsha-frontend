import {
  Box, VStack, Heading, Text, Button, Icon, Link, Badge, HStack, Image, SlideFade
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import GalleryCarousel from '../components/GalleryCarousel';
import ServicesTeaser from '../components/ServicesTeaser';
import AboutTeaser from '../components/AboutTeaser';
import TestimonialsTeaser from '../components/TestimonialsTeaser';
import TestimonialForm from '../components/TestimonialForm';
import PricingFaqsTeaser from '../components/PricingFaqsTeaser';
import ContactTeaser from '../components/ContactTeaser';

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionImage = motion(Image);

export default function Home() {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    api.get('/gallery').then(res => {
      setMedia(res.data);
    });
  }, []);

  return (
    <>
      <Box
        id="home"
        w="100%"
        minH="100vh"
        position="relative"
        backgroundImage="linear-gradient(to right, rgba(183, 90, 2, 0.92), rgba(165, 255, 232, 0.62)), url('./assets/HeroBG.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        px={{ base: 4, sm: 6, md: 10, xl: 20 }}
        py={{ base: 10, sm: 16, md: 24 }}
        overflow="hidden"
      >
        {/* Floating Thumbnails */}
        <Box position="absolute" top={0} left={0} w="100%" h="100%" zIndex={0} pointerEvents="none">
          <MotionImage
            src="/assets/wardrobe.png"
            alt="Modular Wardrobe"
            position="absolute"
            display={{ base: 'none', sm: 'block' }}
            top={{ base: '12%', md: '4%' }}
            right={{ base: '4%', md: '16%' }}
            maxW={{ base: '120px', sm: '160px', md: '240px', xl: '260px', '2xl': '420px' }}
            borderRadius="lg"
            boxShadow="2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          />
          <MotionImage
            src="/assets/ceiling.png"
            alt="Modern Ceiling"
            position="absolute"
            display={{ base: 'none', sm: 'block' }}
            top={{ base: '35%', md: '38%' }}
            right={{ base: '6%', md: '4%' }}
            maxW={{ base: '120px', sm: '160px', md: '240px', xl: '240px', '2xl': '400px' }}
            borderRadius="lg"
            boxShadow="2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          />
          <MotionImage
            src="/assets/kitchen.png"
            alt="Modular Kitchen"
            position="absolute"
            display={{ base: 'none', sm: 'block' }}
            top={{ base: '60%', md: '60%' }}
            right={{ base: '4%', md: '16%' }}
            transform="translateY(-50%)"
            maxW={{ base: '120px', sm: '160px', md: '260px', xl: '300px', '2xl': '460px' }}
            borderRadius="lg"
            boxShadow="2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          />
        </Box>

        {/* Main Content */}
        <VStack
          spacing={{ base: 6, md: 8 }}
          align="start"
          w={{ base: '100%', md: '60%', xl: '50%', '2xl': '45%' }}
          px={{ base: 4, md: 10, xl: 16 }}
          py={{ base: 8, md: 12 }}
          zIndex={1}
          position="relative"
          textAlign={{ base: 'left', md: 'start' }}
        >
          <MotionHeading
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl', '2xl': '6xl' }}
            fontWeight="semibold"
            color="white"
            lineHeight="short"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Crafting Modern Spaces with Aluminium & Plywood Precision
          </MotionHeading>

          <MotionText
            fontSize={{ base: 'sm', sm: 'md', md: 'lg', '2xl': 'xl' }}
            color="white"
            lineHeight="tall"
            maxW="100%"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            From elegant partitions to complete interior transformations — we bring durability, beauty, and craftsmanship into every corner of your home or office.
          </MotionText>

          <Badge colorScheme="green" fontSize={{ base: 'sm', md: 'md', '2xl': 'lg' }}>🏷 MOODBIDRI</Badge>

          {/* CTA Buttons */}
          <HStack spacing={4} flexWrap="wrap" justify={{ base: 'start', md: 'flex-start' }} w="100%">
            <Button
              as={RouterLink}
              to="/gallery"
              bg="white"
              color="teal.500"
              _hover={{
                bg: 'gray.100',
                boxShadow: '0 0 12px rgba(0, 128, 128, 0.6)',
                transform: 'translateY(-2px)',
              }}
              size={{ base: 'md', md: 'lg', '2xl': 'xl' }}
            >
              🏠 View Our Work
            </Button>
            <Link href="tel:+918123456789">
              <Button
                leftIcon={<Icon as={FaPhoneAlt} />}
                bg="teal.500"
                color="white"
                _hover={{
                  bg: 'teal.600',
                  boxShadow: '0 0 12px rgba(0, 255, 200, 0.6)',
                  transform: 'scale(1.05)',
                }}
                size={{ base: 'md', md: 'lg', '2xl': 'xl' }}
              >
                📞 Get a Free Consultation
              </Button>
            </Link>
          </HStack>
        </VStack>
      </Box>

   
        <Box
  w="100%"
  maxW="100vw"
  minW="0"
  overflowX="hidden"
  px={{ base: 2, sm: 4, md: 6 }}
  py={{ base: 4, sm: 6, md: 8 }}
>
  <GalleryCarousel images={media} />

  <SlideFade in offsetY={40}><ServicesTeaser /></SlideFade>
  <SlideFade in offsetY={40}><AboutTeaser /></SlideFade>
  <SlideFade in offsetY={40}><TestimonialsTeaser /></SlideFade>
  <SlideFade in offsetY={40}><TestimonialForm /></SlideFade>
  <SlideFade in offsetY={40}><PricingFaqsTeaser /></SlideFade>
  <SlideFade in offsetY={40}><ContactTeaser /></SlideFade>
</Box>

      {/* Floating WhatsApp Button */}
      <Link
        href="https://wa.me/919606601658"
        isExternal
        position="fixed"
        bottom="6"
        right="6"
        zIndex="overlay"
      >
        <Box
          as="button"
          bg="green.500"
          color="white"
          p={4}
          borderRadius="full"
          boxShadow="0 0 12px rgba(0, 255, 0, 0.6)"
          _hover={{ bg: 'green.600', transform: 'scale(1.1)' }}
          transition="all 0.3s ease"
        >
          <Icon as={FaPhoneAlt} boxSize={5} />
        </Box>
      </Link>
    </>
  );
}
