import { Box, Flex, Image, Link, Icon, base, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, } from '@chakra-ui/react'
import { BsWhatsapp } from 'react-icons/bs';
import { BsBag } from 'react-icons/bs';
import React, { useState } from 'react'
import Mobile from '@/components/Mobile'

// display={{base: 'none', md: 'flex'}} //


const Header = () => {

    const [isOpen, SetisOpen] = useState(false)

    const toggleCart = () => {
        SetisOpen(!isOpen);
      };

    const whatsappNumber = '+55 11 98315-8385'; // Substitua pelo número de WhatsApp desejado
    const whatsappMessage = 'Olá! Gostaria de fazer um orçamento.'; // Mensagem padrão (opcional)

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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
                    <Link href='/'>
                        <Image w="220px" src='./assets/logo-removebg-preview.png' alt='imagem' />
                    </Link>
                </Box>
                <Box display="flex" gap="1rem">
                    <Link  _hover={{ color: '#CFD0D0', textDecoration: "none", transition: '4s', fontWeight: 'bold' }}> Ajuda</Link>
                    <Link  _hover={{ color: '#CFD0D0', textDecoration: "none", transition: '4s', fontWeight: 'bold' }}>Entrar</Link>
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
            display={{base: 'none', md: 'flex'}}
            gap='2rem'
            marginLeft='40px'>
                <Link href='/clean'  _hover={{ color: '#FF4F0D', textDecoration: "none", transition: '4s', fontWeight: 'bold' }} >Higiene e Limpeza</Link>
                <Link href='/toychildren'  _hover={{ color: '#FF4F0D', textDecoration: "none", transition: '4s', fontWeight: 'bold' }}>Infantil</Link>
                <Link href='/eletronic'  _hover={{ color: '#FF4F0D', textDecoration: "none", transition: '4s', fontWeight: 'bold' }}>Eletrônicos</Link>
            </Box>
            <Mobile />
            <Box display='flex' gap='2rem'>
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer"><Icon as={BsWhatsapp} boxSize={7} color="#fff" cursor={'pointer'} /></Link>
                
                <Icon as={BsBag} boxSize={6} color="#fff" cursor='pointer' onClick={toggleCart} />
                <Drawer placement="right" onClose={toggleCart} isOpen={isOpen}>
                    <DrawerOverlay>
                    <DrawerContent bg="#fff">
                        <DrawerCloseButton/>
                        <DrawerBody>
                            
                        </DrawerBody>
                    </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
            </Box>  
        </Flex>
    </Box>
       
           
    </>
    
  )
}

export default Header;