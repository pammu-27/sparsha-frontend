import {
  Box, Heading, VStack, Input, Textarea, Button, useToast
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { api } from '../lib/api';

const MotionBox = motion(Box);

export default function TestimonialForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();

  const handleSubmit = async () => {
    if (!name || !message) {
      toast({ title: 'Name and message required', status: 'warning', duration: 3000 });
      return;
    }
    await api.post('/testimonial', { name, message });
    toast({ title: 'Thank you for your feedback!', status: 'success', duration: 3000 });
    setName('');
    setMessage('');
  };

  return (
    <MotionBox
      w="100%"
      maxW="100%"
      px={{ base: 4, sm: 6, md: 10, xl: 20, '2xl': 32 }}
      py={{ base: 10, md: 16 }}
      bgGradient="linear(to-r, whiteAlpha.900, ivory.100)"
      borderRadius="xl"
      boxShadow="lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Heading fontSize={{ base: '2xl', md: '4xl' }} color="gold.500" mb={6}>
        Share Your Experience
      </Heading>
      <VStack spacing={4} align="start">
        <Input placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
        <Textarea placeholder="Your Testimonial" value={message} onChange={e => setMessage(e.target.value)} />
        <Button bg="teal.500" color="white" _hover={{ bg: 'teal.600' }} onClick={handleSubmit}>
          Submit Testimonial
        </Button>
      </VStack>
    </MotionBox>
  );
}
