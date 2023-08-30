import { Box, Flex, Image, Link, Icon, Text } from '@chakra-ui/react'
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBag } from 'react-icons/bs';
import React from 'react'


const Header = () => {

  return (
    <>
    <Box
     position="fixed"
     width="100%"
     zIndex="1000"
     top="0"
     left="0"
    >
        <Flex bg="#F7F7F7">
            <Flex 
                w="100%" 
                justifyContent="space-between"
                alignItems="center"
                padding="0 2%"
            >
                <Box>
                    <Image w="220px" src='./assets/logo-removebg-preview.png' alt='imagem' />
                </Box>
                <Box display="flex" gap="1rem">
                    <Link  _hover={{ color: '#005D98', textDecoration: "none", transition: '4s', fontWeight: 'bold' }}> Ajuda</Link>
                    <Link  _hover={{ color: '#005D98', textDecoration: "none", transition: '4s', fontWeight: 'bold' }}>Entrar</Link>
                    <Link  _hover={{ color: '#005D98', textDecoration: "none", transition: '4s', fontWeight: 'bold' }}>Junte-se a nós</Link>
                </Box>
            </Flex>
        </Flex>
        <Flex 
            bg="#3874ff"
            w="100%"
            padding='.725rem 2%'
            justifyContent='space-between'
            alignItems='center'
            fontSize="1rem"
            color='#fff'
        >
            <Box 
            display='flex'
            gap='2rem'
            marginLeft='40px'>
                <Link  _hover={{ color: '#FF4F0D', textDecoration: "none", transition: '4s', fontWeight: 'bold' }} >Lançamentos</Link>
                <Link  _hover={{ color: '#FF4F0D', textDecoration: "none", transition: '4s', fontWeight: 'bold' }}>Infantil</Link>
                <Link  _hover={{ color: '#FF4F0D', textDecoration: "none", transition: '4s', fontWeight: 'bold' }}>Eletrônicos</Link>
                <Link  _hover={{ color: '#FF4F0D', textDecoration: "none", transition: '4s', fontWeight: 'bold' }}>Ofertas da semana</Link>
            </Box>
            <Box display='flex' gap='2rem'>
                <Icon as={AiOutlineHeart} boxSize={7} color="#fff" />
                <Icon as={BsBag} boxSize={6} color="#fff" />
            </Box>
        </Flex>
    </Box>
       
           
    </>
    
  )
}

export default Header;