import { Box, Flex, CardBody, Text, Heading, Button, Card, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import CountdownTimer from './CountdownTimer';

const CardEletronic = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/static/eletronic.json')
          .then((response) => response.json())
          .then(setData);
      }, []);

  return (
    <>
    <Box my='2rem' px='5%'> 
     <Box>
        <CountdownTimer />
     </Box>
        <Box 
        w='100%' 
        py={8} 
        display='flex'
        flexWrap='wrap'
        justifyContent='center'
        gap={16}>
            {data.map((item) => {
                const {id, name, price, image, Title} = item;
                return(
            <Card 
            w='325px'
            borderRadius='1rem'
            border='2px solid #ccc'
            key={id}>
                <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                borderRadius='1rem'
                >
                <Image src={image} w="200px" h='25vh' alt='imagem ' />
                </Box>
                <Flex>
                <CardBody 
                display='flex'
                flexDir='column'
                gap='10px'
                >
                    <Heading fontSize='1.5rem' >{name}</Heading>
                    <Text>{Title}</Text>
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