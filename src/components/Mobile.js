import { useState } from 'react';
import { Box, Link, Flex, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, useBreakpointValue } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi'; 


const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false }); // Define como mobile para telas menores que o breakpoint md

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      {isMobile && (
        <IconButton
          icon={<FiMenu />}
          bg='none'
          color='#fff'
          w='50px'
          h='50px'
          aria-label="Abrir Menu"
          onClick={toggleMenu}
        />
      )}
      <Drawer placement="right" onClose={toggleMenu} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent bg="#3874ff">
            <DrawerCloseButton color="#fff" />
            <DrawerBody>
                <Flex 
                w="100%"
                h='100vh'
                justifyContent='center'
                alignItems='center'
                fontSize="1rem"
                color='#fff'
            > 
                    <Box 
                    display='flex'
                    flexDir='column'
                    alignItems='center'
                    gap='2rem'
                    >
                        <Link fontSize='1.5rem'  _hover={{ color: '#FF4F0D', textDecoration: "none", transition: '4s', fontWeight: 'bold' }} >Higiene</Link>
                        <Link fontSize='1.5rem'  _hover={{ color: '#FF4F0D', textDecoration: "none", transition: '4s', fontWeight: 'bold' }}>Infantil</Link>
                        <Link fontSize='1.5rem'  _hover={{ color: '#FF4F0D', textDecoration: "none", transition: '4s', fontWeight: 'bold' }}>Escritório e Papelaria</Link>
                        <Link textAlign='center' fontSize='1.5rem'  _hover={{ color: '#FF4F0D', textDecoration: "none", transition: '4s', fontWeight: 'bold' }}>Embalagens e Descartáveis</Link>
                    </Box>
                </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Mobile;
