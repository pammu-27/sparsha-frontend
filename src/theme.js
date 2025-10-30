import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    charcoal: { 900: '#1A1A1A' },
    gold: { 500: '#D4AF37' },
    ivory: { 100: '#FFFFF0' },
  },
  fonts: {
    heading: `'Playfair Display', serif`,
    body: `'Inter', sans-serif`,
  },
});

export default theme;
