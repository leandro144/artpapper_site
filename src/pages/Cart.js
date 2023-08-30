import Header from '@/components/Header'
import { Flex, Image, Box } from '@chakra-ui/react'
import React from 'react'
import { useEffect, useState} from 'react';

const Cart = () => {


    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/static/shoes.json')
          .then((response) => response.json())
          .then(setData);
      }, []);

  return (
    <>
        <Header />

        <Flex>
            {data.map((item) => {
                const {id, image, name} = item;
                return (
                <Box key={id}>
                    <Image src={image} w='100%' h='50px' alt={name} />
                </Box> 
                )
            })}
            
        </Flex>
    </>
  )
}

export default Cart