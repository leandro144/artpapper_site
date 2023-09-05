import React, { useState, useEffect } from 'react';
import { Box, Flex, Heading, Spinner, Text } from '@chakra-ui/react';

function CountdownTimer() {

    const [totalTimeInSeconds, SetTotalTimeInSeconds] = useState(24 * 60)

    const minutes = Math.floor(totalTimeInSeconds / 60)
    const seconds = totalTimeInSeconds % 60

    useEffect(() => {
        if(totalTimeInSeconds === 0){
            alert('O tempo acabou')
            return
        }else{
            setTimeout(() => {
                SetTotalTimeInSeconds(totalTimeInSeconds - 1)
            }, 1000);
        }
    }, [totalTimeInSeconds])

  return (
    <Box textAlign="center">
      <Heading as="h1" mb="4">
        OFERTAS POR TEMPO LIMITADO
      </Heading>
      <Flex justifyContent="center" marginBottom='1rem' gap={4}>
        <Box 
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDir='column'
        w='80px'
        h='80px'
        borderRadius='50%'
        fontSize='1.4rem'
        fontWeight='bold'
        border='2px solid #000'
       > {minutes.toString().padStart(2, "0")} <Text fontSize='.725rem' fontWeight='normal'>Minutos</Text> </Box>
        <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDir='column'
        w='80px'
        h='80px'
        borderRadius='50%'
        fontSize='1.4rem'
        fontWeight='bold'
        border='2px solid #000'> {seconds.toString().padStart(2, "0")} <Text fontSize='.725rem' fontWeight='normal'>Minutos</Text> </Box>
      </Flex>
    </Box>
  );
}

export default CountdownTimer;
