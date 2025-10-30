import {
  Box, Text, Stack, Link, Divider, VStack, Icon, HStack, Button, Input
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <MotionBox
        as="footer"
        py={10}
        px={{ base: 4, md: 10 }}
        color="ivory.100"
        bgGradient="linear(to-r, #000000ff, #9b5800fd, #000000ff)"
        sx={{
          animation: 'pulse 8s ease infinite',
          backgroundSize: '200% 200%',
          '@keyframes pulse': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <VStack spacing={8} align="center">
          {/* Navigation Links */}
          <Stack direction={{ base: 'column', sm: 'row' }} spacing={6} justify="center">
            {['Services', 'Gallery', 'Contact', 'About'].map((label) => (
              <Link
                key={label}
                as={RouterLink}
                to={`/${label.toLowerCase()}`}
                fontSize="sm"
                fontWeight="medium"
                position="relative"
                sx={{
                  '@keyframes rgbGlow': {
                    '0%': { textShadow: '0 0 5px red' },
                    '25%': { textShadow: '0 0 5px orange' },
                    '50%': { textShadow: '0 0 5px lime' },
                    '75%': { textShadow: '0 0 5px cyan' },
                    '100%': { textShadow: '0 0 5px violet' },
                  },
                }}
                _hover={{
                  color: 'white',
                  animation: 'rgbGlow 2s infinite',
                  _after: {
                    content: '""',
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    width: '100%',
                    height: '2px',
                    bgGradient: 'linear(to-r, yellow, cyan)',
                    boxShadow: '0 0 6px white',
                  },
                }}
              >
                {label}
              </Link>
            ))}
          </Stack>


          {/* Social Icons */}
          <HStack spacing={4}>
            <Link href="https://facebook.com/yourpage" isExternal>
              <Icon as={FaFacebookF} boxSize={5} _hover={{ color: 'gold.400', textShadow: '0 0 6px gold' }} />
            </Link>
            <Link href="https://instagram.com/yourprofile" isExternal>
              <Icon as={FaInstagram} boxSize={5} _hover={{ color: 'gold.400', textShadow: '0 0 6px gold' }} />
            </Link>
            <Link href="https://wa.me/919876543210" isExternal>
              <Icon as={FaWhatsapp} boxSize={5} _hover={{ color: 'green.400', textShadow: '0 0 6px green' }} />
            </Link>
          </HStack>

          {/* Newsletter Signup */}
          <VStack spacing={3} w="100%" maxW="md">
            <Text fontSize="sm" textAlign="center">
              Subscribe for updates and offers
            </Text>
            <form
              action="https://xyz.us21.list-manage.com/subscribe/post?u=abc&id=123"
              method="POST"
              target="_blank"
              style={{ width: '100%' }}
            >
              <Stack direction="row" w="100%">
                <Input
                  name="EMAIL"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  bg="whiteAlpha.100"
                  color="white"
                  _placeholder={{ color: 'ivory.300' }}
                  required
                />
                <Button
                  type="submit"
                  bg="gold.500"
                  color="white"
                  _hover={{ bg: 'gold.600', boxShadow: '0 0 10px gold' }}
                >
                  Subscribe
                </Button>
              </Stack>
            </form>
          </VStack>

          {/* Service Area */}
          <Text fontSize="sm" textAlign="center">
            Serving Moodbidri, Udupi, Mangalore & nearby regions with premium aluminium and plywood interiors.
          </Text>

          <Divider borderColor="ivory.300" />

          {/* Copyright */}
          <Text fontSize="xs" textAlign="center">
            © 2025 Sparsha Interiors. All rights reserved.
          </Text>
        </VStack>
      </MotionBox>

      {/* Back to Top Button */}
      {showTop && (
        <MotionButton
          onClick={scrollToTop}
          position="fixed"
          bottom="30px"
          right="30px"
          zIndex="20"
          bg="gold.500"
          color="white"
          _hover={{ bg: 'gold.600', boxShadow: '0 0 10px gold' }}
          leftIcon={<FaArrowUp />}
          size="sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Top
        </MotionButton>
      )}
    </>
  );
}
