import {
  Text,
  Container,
  Flex,
  Heading,
  Grid,
  FormControl,
  FormLabel,
  Input,
  Tag,
  TagRightIcon,
  TagLabel,
  InputGroup,
  InputLeftElement,
  Box,
  AccordionPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
} from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import ProjectPreview from '../../components/projects/projectPreview';
import path from 'path';
import fs from 'fs/promises';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { AddIcon, CloseIcon, Search2Icon } from '@chakra-ui/icons';
import { updateFilteredProjects } from './projectsActions';

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

const ProjectsPage: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    updateFilteredProjects(
      projects,
      setFilteredProjects,
      selectedTechnologies,
      searchValue
    );
  }, [selectedTechnologies]);

  const technologies = Array.from(
    new Set(
      projects.reduce(
        (result: string[], project: Project) => [
          ...result,
          ...project.technologies,
        ],
        []
      )
    )
  );

  return (
    <>
      <Head>
        <title>Projects | Double Debug</title>
        <meta name="description" content="Web developer portfolio website" />
      </Head>
      <Container display="grid" justifyContent="center" maxW={1200} p="12">
        <Flex justify="space-between" alignItems="center">
          <Heading
            as="h1"
            size="2xl"
            textAlign={{ base: 'center', lg: 'left' }}
          >
            Projects
          </Heading>
          <Text fontWeight="medium">
            Showing {filteredProjects.length} of {projects.length}
          </Text>
        </Flex>
        <Accordion allowToggle mt={8} defaultIndex={0}>
          <AccordionItem borderStyle="none">
            <h2>
              <AccordionButton pl={1} pr={0}>
                <FormLabel flex="1" textAlign="left">
                  Filter projects
                </FormLabel>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pl={1} pr={0}>
              <FormControl>
                <InputGroup>
                  <InputLeftElement>
                    <Search2Icon />
                  </InputLeftElement>
                  <Input
                    value={searchValue}
                    onInput={(e) => {
                      setSearchValue(e.currentTarget.value);
                      updateFilteredProjects(
                        projects,
                        setFilteredProjects,
                        selectedTechnologies,
                        e.currentTarget.value
                      );
                    }}
                    type="search"
                    id="search-box"
                    mb={4}
                  />
                </InputGroup>
                <FormLabel htmlFor="search-box" mb={6}>
                  Technologies
                </FormLabel>
                <Flex border="1px solid gray.400" flexWrap="wrap" gap={4}>
                  {technologies.map((tech) => {
                    const isSelected = selectedTechnologies.includes(tech);
                    return (
                      <Tag
                        key={tech}
                        as="button"
                        variant={isSelected ? 'solid' : 'subtle'}
                        colorScheme="blue"
                        columnGap={2}
                        cursor="pointer"
                        onClick={() => {
                          if (isSelected)
                            setSelectedTechnologies(
                              selectedTechnologies.filter((t) => t !== tech)
                            );
                          else
                            setSelectedTechnologies([
                              ...selectedTechnologies,
                              tech,
                            ]);
                        }}
                      >
                        <TagLabel>{tech}</TagLabel>
                        <TagRightIcon
                          boxSize="12px"
                          as={isSelected ? CloseIcon : AddIcon}
                          ml={0}
                        />
                      </Tag>
                    );
                  })}
                </Flex>
              </FormControl>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Grid mt={{ base: 8, lg: 16 }}>
          {filteredProjects.length === 0 && (
            <Box textAlign="center" py={32} px={6}>
              <Search2Icon boxSize={'50px'} color={'blue.500'} />
              <Heading as="h2" size="xl" mt={6} mb={2}>
                No projects found
              </Heading>
            </Box>
          )}
          {filteredProjects.map((project) => (
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
