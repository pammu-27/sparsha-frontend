import { useEffect, useState } from 'react';
import {
  VStack, Box, Text, Input, Button, Heading, Textarea, useToast, Stack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { api } from '../lib/api';

const MotionBox = motion(Box);

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editMessage, setEditMessage] = useState('');
  const toast = useToast();

  const fetchTestimonials = async () => {
    const res = await api.get('/testimonials');
    setTestimonials(res.data);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleAdd = async () => {
    if (!name || !message) {
      toast({ title: 'Name and message required', status: 'warning', duration: 3000 });
      return;
    }
    await api.post('/testimonial', { name, message });
    toast({ title: 'Testimonial added', status: 'success', duration: 3000 });
    setName('');
    setMessage('');
    fetchTestimonials();
  };

  const handleDelete = async (id) => {
    await api.delete(`/testimonial/${id}`);
    toast({ title: 'Deleted', status: 'info', duration: 3000 });
    fetchTestimonials();
  };

  const startEdit = (t) => {
    setEditingId(t.id);
    setEditName(t.name);
    setEditMessage(t.message);
  };

  const handleUpdate = async () => {
    await api.put(`/testimonial/${editingId}`, {
      name: editName,
      message: editMessage
    });
    toast({ title: 'Updated', status: 'success', duration: 3000 });
    setEditingId(null);
    setEditName('');
    setEditMessage('');
    fetchTestimonials();
  };

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
        Manage Testimonials
      </Heading>

      {/* Add New */}
      <VStack spacing={4} align="start" mb={8}>
        <Input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <Textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
        <Button colorScheme="green" onClick={handleAdd}>Add Testimonial</Button>
      </VStack>

      {/* List Existing */}
      <VStack spacing={6} align="stretch">
        {testimonials.map((t) => (
          <Box
            key={t.id}
            p={{ base: 4, sm: 5 }}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="sm"
            bg="gray.50"
          >
            {editingId === t.id ? (
              <VStack spacing={3} align="start">
                <Input value={editName} onChange={e => setEditName(e.target.value)} />
                <Textarea value={editMessage} onChange={e => setEditMessage(e.target.value)} />
                <Stack direction={{ base: 'column', sm: 'row' }} spacing={3}>
                  <Button size="sm" colorScheme="green" onClick={handleUpdate}>Save</Button>
                  <Button size="sm" variant="ghost" onClick={() => setEditingId(null)}>Cancel</Button>
                </Stack>
              </VStack>
            ) : (
              <>
                <Text fontSize="md" fontStyle="italic">“{t.message}”</Text>
                <Text fontSize="sm" fontWeight="bold" mt={3} color="gray.700">— {t.name}</Text>
                <Stack direction={{ base: 'column', sm: 'row' }} mt={4} spacing={3}>
                  <Button size="sm" onClick={() => startEdit(t)}>Edit</Button>
                  <Button size="sm" colorScheme="red" onClick={() => handleDelete(t.id)}>Delete</Button>
                </Stack>
              </>
            )}
          </Box>
        ))}
      </VStack>
    </MotionBox>
  );
}
