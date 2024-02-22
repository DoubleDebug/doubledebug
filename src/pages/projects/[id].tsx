import {
  Box,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Flex,
  Heading,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import path from 'path';
import fs from 'fs/promises';
import { fetchProject } from '../../utils/fetching/fetchProject';
import { ExternalLinkIcon, TimeIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { BlogTags } from '../../components/blog/BlogTags';
import { Carousel } from '../../components/projects/Carousel';
import { Markdown } from '../../components/blog/Markdown';

export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(
    process.cwd(),
    'public/data/projects/metadata.json'
  );
  const projectsMetadataRaw = await fs.readFile(filePath);
  const projectsMetadata = JSON.parse(projectsMetadataRaw.toString());

  const paths = projectsMetadata.projects.map((p: any) => ({
    params: { id: p.id },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const projectData = await fetchProject(context.params?.id as string);

  return {
    props: projectData,
  };
};

interface IProjectArticleProps {
  content: string;
  metadata: Project;
}

const ProjectArticle: React.FC<IProjectArticleProps> = ({
  content,
  metadata,
}) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const breadcrumbColor = useColorModeValue('gray.800', 'gray.400');

  return (
    <>
      <Head>
        <title>{`Project "${metadata.title}" | Double Debug`}</title>
        <meta name="description" content="Web developer portfolio website" />
      </Head>
      <Container maxW={'7xl'} p={{ base: 4, sm: 12 }} pt={8}>
        {!isMobile && (
          <Breadcrumb
            fontWeight="medium"
            fontSize="lg"
            color={breadcrumbColor}
            mb={4}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/projects/${metadata.id}`}>
                {metadata.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        )}
        <Heading as="h1" size="3xl" mb={4}>
          {metadata.title}
        </Heading>
        <Flex
          justify="space-between"
          flexDirection={{ base: 'column', md: 'row' }}
          mb={6}
        >
          <Flex gap={4} flexDirection={{ base: 'column', md: 'row' }}>
            <BlogTags tags={metadata.technologies} />
            {metadata.duration && (
              <Flex gap={2} alignItems="center" title="Project duration">
                <TimeIcon color={breadcrumbColor} />
                <Text color={breadcrumbColor} whiteSpace="nowrap">
                  {metadata.duration}
                </Text>
              </Flex>
            )}
          </Flex>
          <Flex
            alignItems={{ base: undefined, md: 'center' }}
            columnGap={2}
            flexDirection={{ base: 'column', md: 'row' }}
            rowGap={2}
            mt={{ base: 8, md: 0 }}
            ml="auto"
            w={{ base: 'full', md: 'min-content' }}
          >
            {metadata.urls.liveDemo && (
              <Button
                variant="outline"
                px={4}
                columnGap={2}
                onClick={() => window.open(metadata.urls.liveDemo)}
                title={metadata.urls.liveDemo}
                fontWeight={400}
                fontSize="0.9rem"
              >
                Live demo <ExternalLinkIcon />
              </Button>
            )}
            {!metadata.urls.isPrivate && (
              <Button
                variant="outline"
                px={4}
                columnGap={2}
                onClick={() => window.open(metadata.urls.githubRepo)}
                title={metadata.urls.githubRepo}
                fontWeight={400}
                fontSize="0.9rem"
              >
                Source code
                <FontAwesomeIcon icon={faGithub} />
              </Button>
            )}
          </Flex>
        </Flex>
        <Carousel images={metadata.urls.previewImages} />
        <Box rounded="3xl" py={8}>
          <Markdown content={content} />
        </Box>
      </Container>
    </>
  );
};

export default ProjectArticle;
