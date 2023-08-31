import React from 'react'
import { Box, Image } from '@chakra-ui/react'

// display={{base: 'none', md: 'flex'}} //

const Main = () => {
  return (
    <>
        <Box>
            <Image
             src='./assets/1RMV.PNG'
             w='100%'
             h={{base: '85vh', md: '100vh'}}
             pt='123px'
             alt='imagem' />
        </Box>
    </>
  )
}

export default Main