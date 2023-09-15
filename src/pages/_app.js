
import { ChakraProvider } from '@chakra-ui/react';
import theme from "../theme";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} >
      <Head>
        {/* Adicione o link para o seu ícone da guia do navegador */}
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
