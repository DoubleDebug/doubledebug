import type { GetStaticProps, NextPage } from 'next';
import { HomepageCTA } from '../components/homepage/homepageCTA';
import Head from 'next/head';
import path from 'path';
import fs from 'fs/promises';
import { ContactForm } from '../components/contact/contactForm';
import HomepageProjectsSection from '../components/homepage/homepageProjectsSection';
import { Heading } from '@chakra-ui/react';

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'public/data/projects.json');
  const projectsRaw = await fs.readFile(filePath);
  const projectsJson = JSON.parse(projectsRaw.toString());

  return {
    props: {
      projects: projectsJson.projects,
    },
  };
};

export const Home: NextPage<{ projects: ProjectInfo[] }> = ({ projects }) => {
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
