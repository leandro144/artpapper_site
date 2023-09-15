import { 
    Icon,
    Flex, 
    Text, 
    Heading,
    Box
  } 
  from '@chakra-ui/react'
import React from 'react'
import { BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs';

const Footer = () => {
  return (
    <>
       <Flex 
       gap={14}
       py={8} 
       flexDir={{base: 'column', md: 'row'}}
       justifyContent={{base: 'center', md: 'space-around'}}
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
        <Box as="footer" p={4} bg="#005D98" color='#fff' textAlign="center">
            <Text>&copy;{new Date().getFullYear()} Leandro Castro. Todos os direitos reservados.</Text>
        </Box>
       
    </>
  )
}

export default Footer