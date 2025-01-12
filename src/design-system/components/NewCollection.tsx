'use client'

import { Box, Image } from "@chakra-ui/react"
import React from "react"
import useMedia from "../ui-logic/hooks/useMedia"

const NewCollection = () => {
  const { getImageUrl } = useMedia()

  return (
    <Box position="relative" overflow="hidden" width="100vw">
      <Image 
        src={getImageUrl('new-collection.avif')} 
        alt="New collection banner" 
        objectFit="cover" // Ensures the image covers the full width and height
        objectPosition="center" // Centers the image
        width="100%" 
        height="auto" // Height adjusts based on the image's aspect ratio
      />
    </Box>
  )
}

export default NewCollection
