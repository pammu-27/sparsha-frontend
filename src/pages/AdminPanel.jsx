import { useState } from 'react';
import { Box, HStack, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import AdminSidebar from '../components/AdminSidebar';
import AdminGallery from './AdminGallery';
import AdminContact from './AdminContact';
import AdminTestimonials from './AdminTestimonials';

const MotionBox = motion(Box);

export default function AdminPanel() {
  const [active, setActive] = useState('Gallery');

  const renderSection = () => {
    switch (active) {
      case 'Gallery': return <AdminGallery />;
      case 'Contact': return <AdminContact />;
      case 'Testimonials': return <AdminTestimonials />;
      default: return null;
    }
  };

  return (
    <HStack align="start" spacing={0} h="100vh">
      <AdminSidebar active={active} setActive={setActive} />
      <MotionBox flex="1" p={6} overflowY="auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Heading mb={6}>Admin Dashboard – {active}</Heading>
        {renderSection()}
      </MotionBox>
    </HStack>
  );
}
