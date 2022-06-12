import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { HomepageCTA } from '../components/homepageCTA';

export const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dusan Dodic | Junior full stack web developer</title>
        <meta name="description" content="Web developer portfolio website" />
      </Head>
      <Box height={'80vh'}>
        <HomepageCTA />
      </Box>
    </div>
  );
};

export default Home;
