import { useEffect, useState, useRef, createElement} from 'react';
import { 
    Box,  
    Button,  
    Heading,
    Image,
    Text,
    Link
} from '@chakra-ui/react'


const Toy = () => {

  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('https://salmon-bull-slip.cyclic.cloud/Toys')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
    <>
    <Box py={12}>
        <Heading 
        textAlign='center'
        fontWeight='800'
        fontSize='2.8rem'>
            DESENVOLVIDO PARA <br /> O SEU MAIOR CONFORTO
        </Heading>
        <Text 
        fontSize='1.2rem' 
        textAlign='center' 
        color="#292929" 
        fontWeight='600'>
            Os Melhores Brinquedos Infantis
        </Text>
    </Box>
  
  <Box 
  w='100%'
  display='flex'
  alignItems='center'
  justifyContent='center'
  bg='gray.200' 
  py={12}>
    <Box maxW='90vw'>
      <Box display='flex' overflowX='hidden' scrollBehavior='smooth' ref={carousel}>
        {data.map((item) => {
          const {id, name, price, oldPrice, image, link} = item;
          return (
              <Box 
              bg='#fff'
              m='10px'
              p='10px'
              w='305px'
              borderRadius={4}
              flex='none'
              key={id}>
                <Link href={link}>
                <Box w='285px' h='285px'>
                  <Image
                  src={image} 
                  alt={name} 
                  w="100%"
                  h='100%'
                  objectFit='cover'
                  />
                </Box>
                <Box 
                display='flex'
                flexDir='column'
                justifyContent='space-between'
                h='140px'
                >
                  <Text as='span'
                  textAlign='center'
                  color='#fff'
                  p='5px'
                  borderRadius='10px'
                  display='block'>
                    <Text 
                    fontSize='1.2rem' 
                    fontWeight='bold' 
                    margin='10px 0' 
                    color='#00a8fb'>{name}</Text>
                     <Text 
                    fontSize='1rem' 
                    textDecor='line-through'
                    flexGrow='1'
                    color= '#e81a5d'>{oldPrice}</Text>
                    
                    <Text 
                    fontSize='1.2rem'
                    fontWeight='bold'
                    bg='#ff7e3b'
                    marginTop='10px'
                    cursor={'pointer'}
                    >R$ {price}</Text>
                  </Text>
                </Box>
                </Link>
                
              </Box>
          );
        })}
      </Box>
      <Box w='100%' textAlign='center' paddingTop={8} >
        <Button 
        bg='transparent'
        transform='rotate(180deg)'
        border='none'
        cursor='pointer'
        onClick={handleLeftClick}>
          <Image w="50px" src='./assets/216151_right_chevron_icon.png' alt="Scroll Left"  />
        </Button>
        <Button 
        bg='transparent'
        border='none'
        cursor='pointer'
        onClick={handleRightClick}>
          <Image w="50px" src='./assets/216151_right_chevron_icon.png' alt="Scroll Rigth"  />
        </Button>
      </Box>
    </Box>
  </Box>
    
        
    </>
  )
}

export default Toy