import { useEffect, useState } from 'react';
import {
  VStack, Box, Text, Button, Heading, useToast, Stack, Icon, Link
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { api } from '../lib/api';

const MotionBox = motion(Box); // If using Framer Motion v11+, replace with: motion.create(Box)

export default function AdminContact() {
  const [inquiries, setInquiries] = useState([]);
  const toast = useToast();

  useEffect(() => {
    api.get('/contact')
      .then(res => setInquiries(res.data))
      .catch(() => toast({ title: 'Failed to load inquiries', status: 'error', duration: 3000 }));
  }, [toast]); // ✅ Added toast to dependency array

  return (
    <MotionBox
      w="100%"
      maxW="6xl"
      mx="auto"
      px={{ base: 4, sm: 6, md: 8 }}
      py={{ base: 6, sm: 8, md: 12 }}
      overflowX="hidden"
      minH="100vh"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Heading fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }} mb={6}>
        Contact Inquiries
      </Heading>

      <VStack spacing={6} align="stretch">
        {inquiries.map((inq) => (
          <Box
            key={inq.id}
            p={{ base: 4, sm: 5, md: 6 }}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="sm"
            w="100%"
          >
            <Text fontSize={{ base: 'md', sm: 'lg' }} fontWeight="bold">
              {inq.name}
            </Text>
            <Text fontSize={{ base: 'sm', sm: 'md' }} color="gray.600">
              {inq.phone}
            </Text>
            <Text fontSize={{ base: 'sm', sm: 'md' }} mt={2}>
              {inq.message}
            </Text>
            <Text fontSize="xs" color="gray.400" mt={1}>
              {new Date(inq.createdAt).toLocaleString()}
            </Text>

            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={3}
              mt={4}
              wrap="wrap"
            >
              <Link href={`https://wa.me/${inq.phone}`} isExternal>
                <Button
                  leftIcon={<Icon as={FaWhatsapp} />}
                  colorScheme="whatsapp"
                  size="sm"
                  w={{ base: '100%', sm: 'auto' }}
                  whiteSpace="nowrap"
                >
                  Reply on WhatsApp
                </Button>
              </Link>
            </Stack>
          </Box>
        ))}
      </VStack>
    </MotionBox>
  );
}
