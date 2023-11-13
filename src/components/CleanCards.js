import Header from '@/components/Header';
import { Box, Flex, CardBody, Text, Heading, Button, Card, Image, Link } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const CleanCards = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://json-server-s856.onrender.com/products')
          .then((response) => response.json())
          .then(setData);
      }, []);


  return (
   <>
    <Header />
        <Box my='8rem' px='5%'> 
        <Box 
        w='100%' 
        py={8} 
        display='flex'
        flexWrap='wrap'
        justifyContent='center'
        gap={16}>
            {data.map((item) => {
                const {id, name, price, image, Title, link, product} = item;
                return(
            <Card 
            w='325px'
            borderRadius='1rem'
            border='2px solid #ccc'
            key={id}>
                <Link href={link}>  
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
                        <Text fontWeight="bold" color='blue.600' fontSize='1.5rem'>R$ {price}</Text>
                        <Text color='#00AD1D'>{product}</Text>
                        <Button colorScheme='blue' w='150px'>
                        Comprar agora
                        </Button>
                    </CardBody>
                </Flex>
            </Link>
              
            </Card>
            );
        })}
        </Box>
    </Box>
   </>
  )
}

export default CleanCards