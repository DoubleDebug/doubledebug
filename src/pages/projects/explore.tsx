import Head from 'next/head';
import fs from 'fs/promises';
import path from 'path';
import OperatingSystem from '../../components/operatingSystem/operatingSystem';
import { Box, Heading, Text } from '@chakra-ui/react';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public/data/projects.json');
  const projectsRaw = await fs.readFile(filePath);
  const projectsJson = JSON.parse(projectsRaw.toString());

  return {
    props: {
      data: projectsJson.projects,
    },
  };
}

const ExploreProjects: React.FC<{ data: ProjectInfo[] }> = ({
  data: projects,
}) => {
  return (
    <>
      <Head>
        <title>Dušan Dodić | Explore my projects</title>
        <meta name="description" content="Web developer portfolio website" />
      </Head>
      <main>
        <Box marginLeft={10} my={10}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text mb={3}>Explore a project</Text>
          </Heading>
          <Text ml={1} fontSize="2xl" color={'gray.500'}>
            by double clicking it in this totally real operating system.
          </Text>
        </Box>
        <OperatingSystem projects={projects} />
      </main>
    </>
  );
};

export default ExploreProjects;
