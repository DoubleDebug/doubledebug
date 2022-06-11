import css from '../styles/scss/pages/Home.module.scss';
import type { NextPage } from 'next';
import Head from 'next/head';

export const Home: NextPage = () => {
  return (
    <div className={css.pageContainer}>
      <Head>
        <title>Dusan Dodic | Junior full stack web developer</title>
        <meta name="description" content="Web developer portfolio website" />
      </Head>
      <main className={css.mainContainer}>
        <h1>Dusan Dodic</h1>
        <p>Junior full stack web developer</p>
      </main>
    </div>
  );
};

export default Home;
