import {
  Container,
  useColorModeValue,
  Heading,
  Flex,
  Link,
  Text,
  Grid,
} from '@chakra-ui/react';
import ProjectPreview from './homepageProject';

interface IHomepageProjectsSectionProps {
  projects: Project[];
}

const HomepageProjectsSection: React.FC<IHomepageProjectsSectionProps> = ({
  projects,
}) => {
  return (
    <Container
      id="homepage-section-projects"
      display="grid"
      justifyContent="center"
      maxW="100%"
      p="12"
      bg={useColorModeValue('gray.100', 'gray.900')}
    >
      <Flex align="center" justify="space-between">
        <Heading as="h1" size="2xl" textAlign={{ base: 'center', lg: 'left' }}>
          Projects
        </Heading>
        <Flex columnGap={4}>
          <Text>Showing 3 of {projects.length}</Text>
          <span>—</span>
          <Link href="/projects"> See all</Link>
        </Flex>
      </Flex>
      <Grid mt={{ base: 8, lg: 16 }}>
        {projects
          .filter((p) => p.showOnHomepage)
          .map((project) => (
            <ProjectPreview
              data={project}
              key={`project-preview-${project.id}`}
            />
          ))}
      </Grid>
    </Container>
  );
};

export default HomepageProjectsSection;
