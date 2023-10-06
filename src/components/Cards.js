import React from 'react'
import { 
  Card,
  Flex,
  CardBody,
  Image, 
  Text, 
  Heading,
  Button, 
  Box
} 
from '@chakra-ui/react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Cards = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Flex py={12} justifyContent='center' gap={8} flexWrap='wrap'>
        <Card 
          w='351px'
          borderRadius='1rem'
          data-aos="fade-up"
          data-aos-duration="3000"
        >
        <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        bg= '#F5F5F5'
        borderRadius='1rem'
        >
          <Image src='./assets/iphone14.png' w="250px" alt='imagem ' />
        </Box>
        <Flex>
          <CardBody 
          display='flex'
          flexDir='column'
          gap='10px'
           >
            <Heading fontSize='1.5rem' >Iphone 14 Pro</Heading>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, laudantium?</Text>
            <Text fontWeight="bold" color='blue.600' fontSize='1.5rem'>R$ 5,990</Text>
            <Text color='#00AD1D'>20% off</Text>
            <Button colorScheme='blue' w='150px'>
              Comprar agora
            </Button>
          </CardBody>
        </Flex>
      </Card>
      <Card 
          w='350px'
          borderRadius='1rem'
          data-aos="fade-up"
          data-aos-duration="3000"
        >
        <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        bg= '#F5F5F5'
        borderRadius='1rem'
        >
          <Image src='./assets/ipad.png' w="250px" alt='imagem' />
        </Box>
        <Flex>
          <CardBody  
          display='flex'
          flexDir='column'
          gap='10px'>
            <Heading fontSize='1.5rem' >Apple Macbook Air</Heading>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, laudantium?</Text>
            <Text fontWeight="bold" color='blue.600' fontSize='1.5rem'>R$ 4,990</Text>
            <Text color='#00AD1D'>20% off</Text>
            <Button colorScheme='blue' w='150px'>
              Comprar agora
            </Button>
          </CardBody>
        </Flex>
      </Card>
      <Card 
        w='350px'
        borderRadius='1rem'
        data-aos="fade-up"
        data-aos-duration="3000"
        >
        <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        bg= '#F5F5F5'
        borderRadius='1rem'
        >
          <Image src='./assets/s22.png' w="250px" alt='imagem' />
        </Box>
        <Flex>
          <CardBody
           display='flex'
           flexDir='column'
           gap='10px'>
            <Heading fontSize='1.5rem' >Samsung Galaxy S22</Heading>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, laudantium?</Text>
            <Text fontWeight="bold" color='blue.600' fontSize='1.5rem'>R$ 4,990</Text>
            <Text color='#00AD1D'>20% off</Text>
            <Button colorScheme='blue' w='150px'>
              Comprar agora
            </Button>
          </CardBody>
        </Flex>
      </Card>
      </Flex>
    </>
  )
}

export default Cards