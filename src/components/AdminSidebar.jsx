import { VStack, Button, Text } from '@chakra-ui/react';
import supabase from '../lib/supabaseClient';

export default function AdminSidebar({ active, setActive }) {
  const sections = ['Gallery', 'Contact', 'Testimonials'];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem('isAdmin');
    window.location.reload();
  };

  return (
    <VStack
      spacing={4}
      align="stretch"
      bgGradient="linear(to-b, orange.900, black)"
      p={6}
      minW={{ base: '100%', md: '220px' }}
      h="100vh"
      color="white"
      fontFamily="'Playfair Display', serif"
      boxShadow="xl"
      justify="space-between"
    >
      <VStack spacing={4} align="stretch">
        <Text fontSize="xl" fontWeight="bold" mb={2} textAlign="center">
          Admin Panel
        </Text>

        {sections.map(section => (
          <Button
            key={section}
            variant={active === section ? 'solid' : 'outline'}
            colorScheme="orange"
            borderColor="whiteAlpha.400"
            onClick={() => setActive(section)}
            _hover={{ bg: 'orange.700', color: 'white' }}
            fontWeight="medium"
          >
            {section}
          </Button>
        ))}
      </VStack>

      {/* Logout Button */}
      <Button
        colorScheme="red"
        variant="outline"
        onClick={handleLogout}
        _hover={{ bg: 'red.600', color: 'white' }}
      >
        Logout
      </Button>
    </VStack>
  );
}
