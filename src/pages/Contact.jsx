import { useState } from 'react';
import {
  Box, Heading, Text, VStack, Input, Textarea, Button, Icon, Link, useToast
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { api } from '../lib/api';

const MotionBox = motion(Box);

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();

  const handleSubmit = async () => {
    try {
      await api.post('/contact', { name, phone, message });
      toast({ title: 'Message sent', status: 'success', duration: 3000 });
      setName('');
      setPhone('');
      setMessage('');
    } catch {
      toast({ title: 'Failed to send', status: 'error', duration: 3000 });
    }
  };

  return (
    <MotionBox
      px={{ base: 4, sm: 6, md: 10 }}
      py={{ base: 6, sm: 10, md: 16 }}
      maxW="5xl"
      mx="auto"
      bg="ivory.100"
      color="charcoal.900"
      borderRadius="xl"
      boxShadow="lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      fontFamily="body"
    >
      <VStack spacing={10} align="start">
        {/* Heading */}
        <Heading fontSize={{ base: '3xl', md: '4xl' }} color="gold.500" fontFamily="heading">
          Contact Sparsha Interiors
        </Heading>

        {/* Address */}
        <Text fontSize={{ base: 'md', md: 'lg' }} lineHeight="tall">
          Sparsha Aluminium Fabrication & Plywood Interiors<br />
          Kodyadka, Moodbidri – 574226
        </Text>

        {/* Contact Form */}
        <VStack spacing={4} w="100%" align="start">
          <Input
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            borderColor="gold.500"
            focusBorderColor="gold.500"
            fontSize="md"
          />
          <Input
            placeholder="Phone Number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            borderColor="gold.500"
            focusBorderColor="gold.500"
            fontSize="md"
          />
          <Textarea
            placeholder="Your Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            borderColor="gold.500"
            focusBorderColor="gold.500"
            fontSize="md"
            rows={5}
          />
          <Button
            bg="gold.500"
            color="white"
            _hover={{ bg: 'gold.600' }}
            onClick={handleSubmit}
            fontWeight="medium"
            px={6}
            py={2}
          >
            Send Message
          </Button>
        </VStack>

        {/* WhatsApp Button */}
        <Box w="100%">
  <Heading fontSize="xl" mb={3} color="gold.500" fontFamily="heading">
    📱 Instant Support
  </Heading>
  <Text fontSize="md" mb={4}>
    Prefer chatting? Reach us instantly on WhatsApp for quick inquiries and updates.
  </Text>
  <Link href="https://wa.me/918123456789" isExternal style={{ textDecoration: 'none' }}>
    <Button
      leftIcon={<Icon as={FaWhatsapp} />}
      bg="green.500"
      color="white"
      _hover={{ bg: 'green.600' }}
      size="lg"
      fontWeight="medium"
      px={6}
      py={2}
      borderRadius="xl"
      boxShadow="md"
    >
      Chat on WhatsApp
    </Button>
  </Link>
</Box>


        {/* Google Map Embed */}
        <Box
          w="100%"
          h="400px"
          borderRadius="xl"
          overflow="hidden"
          boxShadow="xl"
        >
          <iframe
            title="Sparsha Interiors Location"
            src="https://www.google.com/maps?q=Kodyadka,+Moodbidri+574226&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </VStack>
    </MotionBox>
  );
}
