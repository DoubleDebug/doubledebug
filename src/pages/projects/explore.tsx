import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Draggable from 'react-draggable';
import ProjectWindow from '../../components/projectWindow';

const ExploreProjects: React.FC = () => {
  return (
    <>
      <Head>
        <title>Dušan Dodić | Explore my projects</title>
        <meta name="description" content="Web developer portfolio website" />
      </Head>
      <main>
        <Box width="full" height="200vh" padding="2rem">
          <Draggable bounds="parent" handle=".projectHeader">
            <ProjectWindow
              url="https://fake-reddit.com"
              name="Reddit clone with React, Typescript and Firebase"
            />
          </Draggable>
        </Box>
      </main>
    </>
  );
};

export default ExploreProjects;
