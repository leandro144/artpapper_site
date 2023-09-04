import { Box, Flex, CardBody, Text, Heading, Button, Card, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const CardEletronic = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/static/shoes.json')
          .then((response) => response.json())
          .then(setData);
      }, []);

  return (
    <>
    <Box my='2rem' px='5%'> 
     <Box>Ofertas Imperdiveis</Box>
        <Box 
        border='2px solid #ccc' 
        w='100%' 
        py={8} 
        px='2%' 
        display='flex'
        flexWrap='wrap'
        justifyContent='center'
        gap={12}>
            {data.map((item) => {
                const {id, name, price, image} = item;
                return(
            <Card 
            w='350px'
            borderRadius='1rem'
            border='2px solid #ccc'
            key={id}>
                <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                borderRadius='1rem'
                >
                <Image src={image} w="250px" alt='imagem ' />
                </Box>
                <Flex>
                <CardBody 
                display='flex'
                flexDir='column'
                gap='10px'
                >
                    <Heading fontSize='1.5rem' >{name}</Heading>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, laudantium?</Text>
                    <Text fontWeight="bold" color='blue.600' fontSize='1.5rem'>{price}</Text>
                    <Text color='#00AD1D'>20% off</Text>
                    <Button colorScheme='blue' w='150px'>
                    Comprar agora
                    </Button>
                </CardBody>
                </Flex>
            </Card>
            );
        })}
        </Box>
    </Box>
        
    </>
  )
}

export default CardEletronic