import { useEffect, useState } from 'react';
import {
  Box, Text, Image, Input, Textarea, Button, SimpleGrid, VStack, useToast, HStack, Flex
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { api } from '../lib/api';

const MotionBox = motion(Box);

export default function AdminGallery() {
  const [media, setMedia] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [alt, setAlt] = useState('');
  const [tags, setTags] = useState('');
  const toast = useToast();
  const [file, setFile] = useState(null);
  const [newAlt, setNewAlt] = useState('');
  const [newTags, setNewTags] = useState('');

  const fetchGallery = async () => {
    try {
      const res = await api.get('/gallery');
      setMedia(res.data);
    } catch {
      toast({ title: 'Failed to fetch gallery', status: 'error', duration: 3000 });
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/media/${id}`);
      toast({ title: 'Deleted', status: 'info', duration: 2000 });
      fetchGallery();
    } catch {
      toast({ title: 'Delete failed', status: 'error', duration: 2000 });
    }
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setAlt(item.alt);
    setTags(item.tags.join(', '));
  };

  const handleUpload = async () => {
    if (!file) {
      toast({ title: 'No file selected', status: 'warning', duration: 3000 });
      return;
    }

    const formData = new FormData();
    formData.append('media', file);
    formData.append('alt', newAlt);
    formData.append('tags', newTags);

    try {
      await api.post('/upload', formData);
      toast({ title: 'Upload successful', status: 'success', duration: 3000 });
      setFile(null);
      setNewAlt('');
      setNewTags('');
      fetchGallery();
    } catch {
      toast({ title: 'Upload failed', status: 'error', duration: 3000 });
    }
  };

  const handleUpdate = async () => {
    try {
      await api.put(`/media/${editingId}`, { alt, tags });
      toast({ title: 'Updated', status: 'success', duration: 2000 });
      setEditingId(null);
      setAlt('');
      setTags('');
      fetchGallery();
    } catch {
      toast({ title: 'Update failed', status: 'error', duration: 2000 });
    }
  };

  return (
    <Flex
      direction="column"
      minH="100vh"
      pt={10}
      px={{ base: 4, md: 8 }}
      pb={{ base: 20, md: 28 }} // ensures space for footer
      bg="gray.50"
    >
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        w="100%"
      >
        {/* Upload Section */}
        <VStack spacing={4} mb={10} align="start">
          <Text fontSize="xl" fontWeight="bold">Upload New Media</Text>
          <Input type="file" onChange={e => setFile(e.target.files[0])} />
          <Input
            placeholder="Alt text"
            value={newAlt}
            onChange={e => setNewAlt(e.target.value)}
          />
          <Textarea
            placeholder="Tags (comma separated)"
            value={newTags}
            onChange={e => setNewTags(e.target.value)}
          />
          <Button colorScheme="green" onClick={handleUpload}>Upload</Button>
        </VStack>

        {/* Gallery Grid */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
          {media.map((item) => (
            <Box key={item.id} borderWidth="1px" borderRadius="md" overflow="hidden" bg="white">
              <Image
                src={`${process.env.REACT_APP_API_URL}${item.url}`}
                alt={item.alt}
                h="200px"
                w="100%"
                objectFit="cover"
              />
              <Box p={4}>
                {editingId === item.id ? (
                  <VStack spacing={2}>
                    <Input value={alt} onChange={e => setAlt(e.target.value)} />
                    <Textarea value={tags} onChange={e => setTags(e.target.value)} />
                    <Button size="sm" colorScheme="green" onClick={handleUpdate}>Save</Button>
                    <Button size="sm" variant="ghost" onClick={() => setEditingId(null)}>Cancel</Button>
                  </VStack>
                ) : (
                  <>
                    <Text fontWeight="bold">{item.alt}</Text>
                    <Text fontSize="sm" color="gray.500">{item.tags.join(', ')}</Text>
                    <HStack mt={2}>
                      <Button size="sm" onClick={() => startEdit(item)}>Edit</Button>
                      <Button size="sm" colorScheme="red" onClick={() => handleDelete(item.id)}>Delete</Button>
                    </HStack>
                  </>
                )}
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </MotionBox>
    </Flex>
  );
}
