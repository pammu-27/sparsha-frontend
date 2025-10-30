import {
  Box, Heading, Text, VStack, Accordion, AccordionItem,
  AccordionButton, AccordionPanel, AccordionIcon, Button
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

export default function PricingFaqsTeaser() {
  return (
    <MotionBox
      w="100%"
      maxW="100%"
      px={{ base: 4, sm: 6, md: 10, xl: 20, '2xl': 32 }}
      py={{ base: 10, md: 16 }}
      bgGradient="linear(to-r, ivory.100, gold.50)"
      borderRadius="xl"
      boxShadow="lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <VStack spacing={8} align="start">
        <Heading fontSize={{ base: '2xl', md: '4xl', xl: '5xl' }} color="gold.500" fontFamily="heading">
          Pricing & FAQs
        </Heading>

        <Text fontSize={{ base: 'md', md: 'lg', xl: 'xl' }} color="charcoal.900">
          Every project is unique — pricing depends on materials, design complexity, and site conditions. We offer transparent, tailored estimates after a detailed consultation.
        </Text>

        <Accordion allowToggle w="100%">
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="semibold">Do you offer site visits before quoting?</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              Yes, we offer free site visits in Moodbidri, Udupi, Mangalore, and surrounding areas to assess your space and provide accurate recommendations.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="semibold">Can I customize my kitchen or wardrobe layout?</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              Absolutely. We specialize in modular and custom designs tailored to your space, lifestyle, and aesthetic preferences.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="semibold">Do you provide warranty?</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              Yes, we offer a 1-year workmanship warranty. Material warranties vary by brand and product.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Button
          as={RouterLink}
          to="/pricing"
          bg="gold.500"
          color="white"
          _hover={{ bg: 'gold.600' }}
          size="lg"
        >
          View Full Pricing & FAQs
        </Button>
      </VStack>
    </MotionBox>
  );
}
