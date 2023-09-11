import Header from '@/components/Header'
import React from 'react'
import { Text, Heading, Box,} from '@chakra-ui/react'
import CardEletronic from '@/components/CardEletronic'
import Footer from '@/components/Footer'

const eletronic = () => {
  return (
    <>
        <Header />
        <Box marginTop='170px'>
            <Heading 
            textAlign='center'
            fontWeight='800'
            fontSize='2.5rem'>
                OS MELHORES PRODUTOS <br /> ELETRÔNICOS VOCÊ ENCONTRA AQUI
            </Heading>
        </Box>
        <CardEletronic />
        <Footer />
    </>
  )
}

export default eletronic