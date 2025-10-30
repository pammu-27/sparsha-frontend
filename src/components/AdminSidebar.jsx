import { VStack, Button } from '@chakra-ui/react';

export default function AdminSidebar({ active, setActive }) {
  const sections = ['Gallery', 'Contact', 'Testimonials'];

  return (
    <VStack spacing={4} align="stretch" bg="gray.100" p={4} minW="200px">
      {sections.map(section => (
        <Button
          key={section}
          colorScheme={active === section ? 'green' : 'gray'}
          onClick={() => setActive(section)}
        >
          {section}
        </Button>
      ))}
    </VStack>
  );
}
