import Header from '@/components/Header'
import { useEffect, useState} from 'react';
import { 
    Flex, 
    Text, 
    Heading,
    Box,
    Card,
    Link,
    CardBody,
    Image,
    Button
  } 
  from '@chakra-ui/react'

const Children = () => {

    useEffect(() => {
        fetch('https://salmon-bull-slip.cyclic.cloud/Toys')
          .then((response) => response.json())
          .then(setData);
      }, []);


    const [data, setData] = useState([]);

  return (
    <>
        <Header />
        <Box my='10rem' px='5%'> 
        <Box 
        w='100%' 
        py={8} 
        display='flex'
        flexWrap='wrap'
        justifyContent='center'
        gap={16}>
            {data.map((item) => {
                const {id, name, price, image, Title, link} = item;
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
                        <Text color='#00AD1D'>20% off</Text>
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

export default Children;