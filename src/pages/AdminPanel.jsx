import { useState, useEffect } from 'react';
import AdminLogin from './AdminLogin';
import { HStack, Heading, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import AdminSidebar from '../components/AdminSidebar';
import AdminGallery from './AdminGallery';
import AdminContact from './AdminContact';
import AdminTestimonials from './AdminTestimonials';
import supabase from '../lib/supabaseClient';


const MotionBox = motion(Box);

export default function AdminPanel() {
  const [active, setActive] = useState('Gallery');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setIsAuthenticated(true);
      }
    };
    checkSession();
  }, []);

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <HStack align="start" spacing={0} h="100vh">
      <AdminSidebar active={active} setActive={setActive} />
      <MotionBox flex="1" p={6} overflowY="auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Heading mb={6}>Admin Dashboard – {active}</Heading>
        {active === 'Gallery' && <AdminGallery />}
        {active === 'Contact' && <AdminContact />}
        {active === 'Testimonials' && <AdminTestimonials />}
      </MotionBox>
    </HStack>
  );
}
