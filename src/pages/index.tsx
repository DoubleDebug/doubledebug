import type { GetStaticProps, NextPage } from 'next';
import { HomepageCTA } from '../components/homepageCTA';
import Head from 'next/head';
import path from 'path';
import fs from 'fs/promises';
import { Container, Heading } from '@chakra-ui/react';
import HomepageProject from '../components/homepageProject';

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
        <title>Dušan Dodić | Junior full stack web developer</title>
        <meta name="description" content="Web developer portfolio website" />
      </Head>

      <HomepageCTA />

      <Container maxW={'7xl'} p="12">
        <Heading
          as="h1"
          size="3xl"
          mb={{ base: 8, lg: 16 }}
          textAlign={{ base: 'center', lg: 'left' }}
        >
          Projects
        </Heading>
        {projects
          .filter((p) => p.showOnHomepage)
          .map((project) => (
            <HomepageProject
              data={project}
              key={`project-preview-${project.id}`}
            />
          ))}
      </Container>
    </div>
  );
};

export default Home;
