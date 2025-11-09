import { useEffect, useState } from 'react';
import {
  Box, Heading, SimpleGrid, Image, Text, VStack, Spinner,
  Modal, ModalOverlay, ModalContent, ModalBody, useDisclosure, Button
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { api } from '../lib/api';

const MotionBox = motion(Box);

export default function Gallery() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState('all');
  const [activeImage, setActiveImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    api.get('/gallery').then(res => {
      setMedia(res.data);
      setLoading(false);
    });
  }, []);

  const filteredMedia = selectedTag === 'all'
    ? media
    : media.filter(item => item.tags.includes(selectedTag));

  const visibleMedia = filteredMedia.slice(0, visibleCount);
  const allTags = Array.from(new Set(media.flatMap(item => item.tags)));

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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      fontFamily="body"
    >
      <VStack spacing={8} align="start">
        {/* Page Title */}
        <Heading fontSize={{ base: '3xl', md: '4xl' }} color="gold.500" fontFamily="heading">
          Project Gallery
        </Heading>

        {/* Tag Filters */}
        <Box w="100%">
          <Text fontSize="md" mb={2} fontWeight="semibold">Filter by tag:</Text>
          <SimpleGrid columns={{ base: 2, sm: 3, md: 5 }} spacing={2}>
            <Box
              as="button"
              px={3}
              py={2}
              borderRadius="md"
              bg={selectedTag === 'all' ? 'gold.500' : 'gray.200'}
              color={selectedTag === 'all' ? 'white' : 'charcoal.900'}
              fontWeight="medium"
              onClick={() => {
                setSelectedTag('all');
                setVisibleCount(6);
              }}
            >
              All
            </Box>
            {allTags.map(tag => (
              <Box
                key={tag}
                as="button"
                px={3}
                py={2}
                borderRadius="md"
                bg={selectedTag === tag ? 'gold.500' : 'gray.200'}
                color={selectedTag === tag ? 'white' : 'charcoal.900'}
                fontWeight="medium"
                onClick={() => {
                  setSelectedTag(tag);
                  setVisibleCount(6);
                }}
              >
                {tag}
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Gallery Grid */}
        {loading ? (
          <Spinner size="xl" color="gold.500" />
        ) : (
          <>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6} w="100%">
              {visibleMedia.map((item) => (
                <MotionBox
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="xl"
                  bg="white"
                >
                  <Image
                    src={item.url}
                    alt={item.alt}
                    objectFit="cover"
                    w="100%"
                    h={{ base: '200px', md: '250px' }}
                    borderTopRadius="xl"
                    cursor="pointer"
                    onClick={() => {
                      setActiveImage(item);
                      onOpen();
                    }}
                  />
                  <Box p={4}>
                    <Text fontSize="md" color="charcoal.900" fontWeight="medium" fontFamily="heading">
                      {item.alt}
                    </Text>
                    <Text fontSize="sm" color="gold.500" fontStyle="italic">
                      {item.tags.join(', ')}
                    </Text>
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>

            {/* See More Button */}
            {visibleCount < filteredMedia.length && (
              <Box pt={6}>
                <Button
                  onClick={() => setVisibleCount(prev => prev + 6)}
                  colorScheme="gold"
                  variant="solid"
                  size="md"
                >
                  See More
                </Button>
              </Box>
            )}
          </>
        )}

        {/* Lightbox Modal */}
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent
            bg="white"
            borderRadius="xl"
            boxShadow="2xl"
            maxW={{ base: '90vw', sm: '80vw', md: '70vw', xl: '60vw' }}
            maxH="80vh"
            p={2}
            overflow="hidden"
          >
            <ModalBody p={0}>
              {activeImage && (
                <Image
                  src={activeImage.url}
                  alt={activeImage.alt}
                  objectFit="contain"
                  w="100%"
                  h="auto"
                  maxH="100%"
                  borderRadius="xl"
                />
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </VStack>
    </MotionBox>
  );
}
