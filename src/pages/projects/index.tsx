import { Text, Container, Flex, Heading, Grid } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import ProjectPreview from '../../components/homepage/homepageProject';
import path from 'path';
import fs from 'fs/promises';
import Head from 'next/head';

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

const ProjectsPage: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Projects | Double Debug</title>
        <meta name="description" content="Web developer portfolio website" />
      </Head>
      <Container display="grid" justifyContent="center" maxW="100%" p="12">
        <Flex justify="space-between" alignItems="center">
          <Heading
            as="h1"
            size="2xl"
            textAlign={{ base: 'center', lg: 'left' }}
          >
            Projects
          </Heading>
          <Text>
            Number of projects:
            <Text as="span" fontSize="2xl" ml={3}>
              {projects.length}
            </Text>
          </Text>
        </Flex>
        <Grid mt={{ base: 8, lg: 16 }}>
          {projects.map((project) => (
            <ProjectPreview
              data={project}
              key={`project-preview-${project.id}`}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ProjectsPage;
