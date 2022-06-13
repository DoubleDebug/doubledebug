import type { NextPage } from 'next';
import Head from 'next/head';
import { HomepageCTA } from '../components/homepageCTA';

export const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dušan Dodić | Junior full stack web developer</title>
        <meta name="description" content="Web developer portfolio website" />
      </Head>
      <HomepageCTA />
    </div>
  );
};

export default Home;
