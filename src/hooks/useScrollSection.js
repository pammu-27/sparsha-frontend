import { useEffect, useState } from 'react';

export function useScrollSection(sectionIds) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const offset = el.offsetTop - 120; // adjust for navbar height
          if (scrollY >= offset) {
            setActiveId(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeId;
}
