import {
  Box, Heading, Text, VStack, Accordion, AccordionItem,
  AccordionButton, AccordionPanel, AccordionIcon, Divider, Link
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function PricingFaqs() {
  return (
    <MotionBox
      px={{ base: 4, sm: 6, md: 10 }}
      py={{ base: 6, sm: 10, md: 16 }}
      maxW="7xl"
      mx="auto"
      bg="ivory.100"
      color="charcoal.900"
      borderRadius="xl"
      boxShadow="lg"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      fontFamily="body"
    >
      <VStack spacing={12} align="start">
        {/* Page Title */}
        <Box>
          <Heading fontSize={{ base: '3xl', md: '4xl' }} color="gold.500" fontFamily="heading">
            Pricing & FAQs
          </Heading>
          <Text mt={4} fontSize={{ base: 'md', md: 'lg' }}>
            Every project is unique — pricing depends on materials, design complexity, and site conditions. We offer transparent, tailored estimates after a detailed consultation.
          </Text>
          <Text mt={2} fontSize="md">
            <Link href="/contact" color="gold.500" fontWeight="semibold">
              Contact us
            </Link>{' '}
            to schedule a site visit or request a custom quote.
          </Text>
        </Box>

        <Divider borderColor="gold.500" />

        {/* FAQs */}
        <Box w="100%">
          <Heading fontSize="2xl" mb={4} color="gold.500" fontFamily="heading">
            ❓ Frequently Asked Questions
          </Heading>
          <Accordion allowToggle>
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
                <Box flex="1" textAlign="left" fontWeight="semibold">What is the typical project timeline?</Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                Most residential projects are completed within 2–4 weeks depending on size and complexity. Timelines are finalized after site evaluation.
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
        </Box>
      </VStack>
    </MotionBox>
  );
}
