import {
  Box, Flex, Link, Heading, IconButton, Drawer, DrawerOverlay, DrawerContent,
  DrawerCloseButton, DrawerHeader, DrawerBody, VStack, useDisclosure, Image
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionLink = motion(Link);
const MotionIconButton = motion(IconButton);

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'FAQ/Price', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrolled(scrollTop > 50);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <Box
        position="fixed"
        top="0"
        left="0"
        height="4px"
        width={`${scrollProgress}%`}
        bg="gold.500"
        zIndex="overlay"
        transition="width 0.2s ease"
      />

      {/* Navbar */}
      <MotionBox
        as="header"
        position="sticky"
        top="0"
        zIndex="sticky"
        px={{ base: 4, md: 8, lg: 12 }}
        py={scrolled ? 2 : 4}
        bgGradient="linear(to-r, charcoal.900, #623403, charcoal.900)"
        sx={{
          animation: 'pulseBg 12s ease infinite',
          '@keyframes pulseBg': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
          backgroundSize: '200% 200%',
        }}
        color="ivory.100"
        boxShadow={scrolled ? 'lg' : 'md'}
        backdropFilter={scrolled ? 'blur(10px)' : 'none'}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Flex justify="space-between" align="center" maxW="100%" mx="auto">
          {/* Logo + Brand */}
          <Flex align="center" gap={3}>
            <MotionImage
              src="/assets/logo.png"
              alt="Logo"
              boxSize={scrolled ? '32px' : '40px'}
              borderRadius="full"
              transition="all 0.3s ease"
              whileHover={{ scale: 1.1, filter: 'drop-shadow(0 0 6px gold)' }}
            />
            <Heading
              fontSize={scrolled ? 'lg' : 'xl'}
              color="gold.500"
              transition="all 0.3s ease"
            >
              Sparsha Interiors
            </Heading>
          </Flex>

          {/* Desktop Nav */}
          <Flex gap={6} display={{ base: 'none', md: 'flex' }}>
            {navLinks.map(link => (
              <MotionLink
                key={link.path}
                href={link.path}
                fontWeight="medium"
                fontSize="md"
                position="relative"
                transition="all 0.3s ease"
                whileHover={{ y: -2 }}
                _hover={{
                  color: 'gold.400',
                }}
                sx={{
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    width: '0%',
                    height: '2px',
                    bg: 'gold.400',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                {link.label}
              </MotionLink>
            ))}
          </Flex>

          {/* Mobile Menu Button */}
          <MotionIconButton
            icon={<FaBars />}
            aria-label="Open menu"
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            variant="ghost"
            color="gold.400"
            whileHover={{
              scale: 1.2,
              rotate: 10,
              boxShadow: '0 0 12px gold',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
        </Flex>

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent
            bg="#3c1f00ff"
            color="ivory.100"
            maxW={{ base: '80%', sm: '60%', md: '400px' }}
            h="auto"
            borderLeft="1px solid"
            borderColor="gold.500"
            borderTopLeftRadius="md"
            borderBottomLeftRadius="md"
            boxShadow="dark-lg"
          >
            <DrawerCloseButton />
            <DrawerHeader color="gold.500">Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="start">
                {navLinks.map(link => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Link
                      href={link.path}
                      onClick={onClose}
                      fontWeight="medium"
                      fontSize="lg"
                      position="relative"
                      transition="all 0.3s ease"
                      _hover={{
                        color: 'gold.400',
                        transform: 'translateX(4px)',
                      }}
                      sx={{
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: '-2px',
                          left: 0,
                          width: '0%',
                          height: '2px',
                          bg: 'gold.400',
                          transition: 'width 0.3s ease',
                        },
                        '&:hover::after': {
                          width: '100%',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

      </MotionBox>
    </>
  );
}
