import { 
    Icon,
    Flex, 
    Text, 
    Heading,
    Box,
    Divider
  } 
  from '@chakra-ui/react'
import React from 'react'
import { BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs';

const Footer = () => {
  return (
    <>
       <Flex 
       justifyContent='space-around'
       gap={14}
       py={8} 
       flexWrap='wrap'
      >
            <Box
            display='flex'
            gap={4}
            flexDir='column'
            >
                <Heading 
                fontSize='1rem'
                color='#005D98'
                fontWeight='bold'>ATENDIMENTO</Heading>
                <Text 
                fontWeight='bold'
                >
                    11 5060-5060<br></br> de segunda à sextas-feiras: das 8h às <br></br> 18:30h e aos sábados: das 8h às 16h
                </Text>
                <Text 
                border='1px solid #000'
                py={2}
                fontWeight='bold'
                textAlign="center"
                cursor='pointer'
                >
                    CENTRAL DE ATENDIMENTO
                </Text>
            </Box>
            <Box
            display='flex'
            gap={4}
            flexDir='column'
            >
                <Heading 
                fontSize='1rem'
                color='#005D98'
                fontWeight='bold'>INSTITUCIONAL
                </Heading>
                <Text>Quem somos</Text>
                <Text>Nossa Loja Virtual</Text>
                <Text>Trabalhe conosco</Text>
                <Text>Politica de Privacicade</Text>
            </Box>
            <Box
            display='flex'
            gap={4}
            flexDir='column'
            >
                <Heading 
                fontSize='1rem'
                color='#005D98'
                fontWeight='bold'>DÚVIDA
                </Heading>
                <Text>Perguntas frequentes</Text>
                <Text>Retirada e troca</Text>
                <Text>Lista de presente</Text>
            </Box>
            <Box
            display='flex'
            gap={4}
            flexDir='column'
            >
                <Heading 
                fontSize='1rem'
                color='#005D98'
                fontWeight='bold'>SIGA-NOS
                </Heading>
                <Box display='flex' gap='2rem'>
                    <Icon as={BsInstagram} boxSize={7} cursor='pointer' color='#005D98' />
                    <Icon as={BsFacebook} boxSize={8} cursor='pointer' color='#005D98' />
                    <Icon as={BsTwitter} boxSize={8} cursor='pointer' color='#005D98' />
                </Box>
            </Box>
       </Flex>
       <Box py={4}>
            <Box w='91%' h='2px' bg='#C2C2C2' display='flex' margin='0 auto'></Box>
       </Box>
       
    </>
  )
}

export default Footer