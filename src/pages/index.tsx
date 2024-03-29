import fs from 'fs/promises';
import path from 'path';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import type { GetStaticProps, NextPage } from 'next';
import { Heading } from '@chakra-ui/react';
import { ContactForm } from '../components/contact/contactForm';
const HomepageCTA = dynamic(
  () => import('../components/homepage/homepageCTA'),
  { ssr: false }
);
import HomepageProjectsSection from '../components/homepage/homepageProjectsSection';

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(
    process.cwd(),
    'public/data/projects/metadata.json'
  );
  const projectsRaw = await fs.readFile(filePath);
  const projectsJson = JSON.parse(projectsRaw.toString());

  return {
    props: {
      projects: projectsJson.projects,
    },
  };
};

export const Home: NextPage<{ projects: Project[] }> = ({ projects }) => {
  return (
    <div>
      <Head>
        <title>Double Debug | Full stack web developer</title>
        <meta name="description" content="Web developer portfolio website" />
      </Head>

      <HomepageCTA />

      <HomepageProjectsSection projects={projects} />

      <ContactForm>
        <Heading
          size="2xl"
          textAlign={{ base: 'center', md: 'left' }}
          ml={{ base: 0, md: 32 }}
        >
          Get in touch
        </Heading>
      </ContactForm>
    </div>
  );
};

export default Home;
