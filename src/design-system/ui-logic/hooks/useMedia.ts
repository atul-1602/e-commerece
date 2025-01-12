'use client'

import { useColorMode } from '@/components/ui/color-mode';

function useMedia() {
  const { colorMode } = useColorMode();
  
  const getImageUrl = (name: string, fromTheme?: 'light' | 'dark') => 
    `/images/${fromTheme ?? colorMode}/${name}`;

  const getIconUrl = (name: string, fromTheme?: 'light' | 'dark') => 
    `/images/${fromTheme ?? colorMode}/icons/${name}`;

  return { getImageUrl, getIconUrl };
}

export default useMedia;