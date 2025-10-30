import {
  Box, Image, Flex, Modal, ModalOverlay, ModalContent, ModalBody,
  useDisclosure, HStack, IconButton
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { BsDot } from 'react-icons/bs';

export default function GalleryCarousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeImage, setActiveImage] = useState(null);
  const total = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 2000);
    return () => clearInterval(interval);
  }, [total]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prev) => (prev + 1) % total),
    onSwipedRight: () => setCurrentIndex((prev) => (prev - 1 + total) % total),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const openModal = (img) => {
    setActiveImage(img);
    onOpen();
  };

  if (images.length === 0) return null;

  return (
    <Box
      w="100%"
      maxW="100vw"
      overflowX="hidden"
      px={{ base: 2, sm: 4, md: 6 }}
      py={{ base: 4, sm: 6, md: 8 }}
      {...swipeHandlers}
    >
      {/* Carousel Container */}
      <Box
        maxW={{ base: '95vw', md: '80vw', xl: '100vw' }}
        mx="auto"
        bgGradient="linear(to-r, #000000ff, #5d2d00ff, #000000ff)"
        borderRadius="xl"
        boxShadow="lg"
        p={{ base: 3, md: 6 }}
      >
        {/* Carousel */}
        <Flex justify="center" align="center" overflow="hidden" position="relative">
          <Flex
            transform={`translateX(-${currentIndex * 100}%)`}
            transition="transform 0.6s ease-in-out"
            w={`${100 * total}%`}
          >
            {images.map((img, idx) => (
              <Box
                key={img.id || idx}
                flex="0 0 100%"
                px={2}
                onClick={() => openModal(img)}
                cursor="pointer"
              >
                <Box
                  w="100%"
                  maxW={{ base: '80vw', sm: '60vw', md: '50vw', xl: '40vw' }}
                  mx="auto"
                  aspectRatio={1}
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="md"
                >
                  <Image
                    src={`${process.env.REACT_APP_API_URL}${img.url}`}
                    alt={img.alt}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                    loading="lazy"
                  />
                </Box>
              </Box>
            ))}
          </Flex>
        </Flex>

        {/* Dots */}
        <HStack justify="center" mt={4} spacing={1}>
          {images.map((_, idx) => (
            <IconButton
              key={idx}
              icon={<BsDot size={28} />}
              variant="ghost"
              color={idx === currentIndex ? 'yellow.400' : 'whiteAlpha.600'}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              _hover={{ color: 'yellow.300' }}
              size="sm"
            />
          ))}
        </HStack>
      </Box>

      {/* Modal Preview */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          bg="black"
          borderRadius="xl"
          boxShadow="2xl"
          w={{ base: '90vw', sm: '80vw', md: '70vw', xl: '60vw' }}
          maxH={{ base: '80vh', sm: '85vh', md: '90vh' }}
          overflow="hidden"
        >
          <ModalBody p={0}>
            {activeImage && (
              <Image
                src={`${process.env.REACT_APP_API_URL}${activeImage.url}`}
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
    </Box>
  );
}
