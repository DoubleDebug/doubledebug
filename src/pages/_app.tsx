import '../styles/globals.css';
import '../styles/animations.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Nav from '../components/layout/navbar';
import Head from 'next/head';
import { Footer } from '../components/layout/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* HTML Meta Tags */}
        <meta
          name="description"
          content="Get to know me, explore my projects and read my blog | Web developer portfolio website"
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://doubledebug.vercel.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Double Debug | Full stack web developer"
        />
        <meta
          property="og:description"
          content="Get to know me, explore my projects and read my blog | Web developer portfolio website"
        />
        <meta property="og:image" content="images/og-image.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="doubledebug.vercel.app" />
        <meta property="twitter:url" content="https://doubledebug.vercel.app" />
        <meta
          name="twitter:title"
          content="Double Debug | Full stack web developer"
        />
        <meta
          name="twitter:description"
          content="Get to know me, explore my projects and read my blog | Web developer portfolio website"
        />
        <meta name="twitter:image" content="images/og-image.png" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
