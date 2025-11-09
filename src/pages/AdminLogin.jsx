import { useState } from 'react';
import {
  Box, Input, Button, Heading, VStack, Text, useToast, Image
} from '@chakra-ui/react';
import supabase from '../lib/supabaseClient';


export default function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      toast({
        title: 'Login failed',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } else {
      localStorage.setItem('isAdmin', 'true');
      onLogin();
    }
  };

  return (
    <Box
      w="100vw"
      h="100vh"
      bgGradient="linear(to-br, orange.900, black)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack
        spacing={6}
        bg="whiteAlpha.100"
        p={8}
        borderRadius="xl"
        boxShadow="2xl"
        backdropFilter="blur(10px)"
        w={{ base: '90%', sm: '400px' }}
      >
        <Image src="/assets/logo.png" alt="Sparsha Interiors" boxSize="60px" />
        <Heading color="white" fontFamily="Playfair Display">Admin Login</Heading>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          bg="white"
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          bg="white"
        />
        <Button colorScheme="orange" onClick={handleLogin}>Login</Button>
        <Text fontSize="sm" color="gray.300">Secure access for authorized admins only</Text>
      </VStack>
    </Box>
  );
}
