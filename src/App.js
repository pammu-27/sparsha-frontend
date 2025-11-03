
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import AdminPanel from './pages/AdminPanel';
import AdminGallery from './pages/AdminGallery';
import theme from './theme';
import PricingFaqs from './pages/PricingFaqs';

<ChakraProvider theme={theme}>
  <App />
</ChakraProvider>

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/gallery" element={<AdminGallery />} />
        <Route path="/pricing" element={<PricingFaqs />} />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
