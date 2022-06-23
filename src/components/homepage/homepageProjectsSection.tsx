import { Container, useColorModeValue, Heading } from '@chakra-ui/react';
import HomepageProject from './homepageProject';

interface IHomepageProjectsSectionProps {
  projects: ProjectInfo[];
}

const HomepageProjectsSection: React.FC<IHomepageProjectsSectionProps> = ({
  projects,
}) => {
  return (
    <Container
      display="grid"
      justifyContent="center"
      maxW="100%"
      p="12"
      bg={useColorModeValue('gray.100', 'gray.900')}
    >
      <Heading
        as="h1"
        size="2xl"
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
  );
};

export default HomepageProjectsSection;
