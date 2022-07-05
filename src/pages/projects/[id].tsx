import css from '../../styles/Blog.module.css';
import {
  Box,
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
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import path from 'path';
import fs from 'fs/promises';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { fetchProject } from '../../utils/fetching/fetchProject';
import { BlogTags } from '../blog/components';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Carousel } from './components';

export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), 'public/data/projects.json');
  const projectIdsRaw = await fs.readFile(filePath);
  const projectIds = JSON.parse(projectIdsRaw.toString());

  const paths = projectIds.projects.map((p: any) => ({ params: { id: p.id } }));

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

  return (
    <>
      <Head>
        <title>Project "{metadata.title}" | Double Debug</title>
        <meta name="description" content="Web developer portfolio website" />
      </Head>
      <Container maxW={'7xl'} p={12} pt={8}>
        {!isMobile && (
          <Breadcrumb
            fontWeight="medium"
            fontSize="lg"
            color={useColorModeValue('gray.800', 'gray.400')}
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
          <BlogTags tags={metadata.technologies} />
          <Flex
            alignItems={{ base: undefined, md: 'center' }}
            columnGap={4}
            flexDirection={{ base: 'column', md: 'row' }}
            rowGap={2}
            mt={{ base: 8, md: 0 }}
            w={{ base: 'full', md: 'min-content' }}
          >
            {metadata.urls.liveDemo && (
              <Button variant="outline" px={12} columnGap={2}>
                Live demo <ExternalLinkIcon />
              </Button>
            )}
            {!metadata.urls.isPrivate && (
              <Button variant="outline" px={6} columnGap={2}>
                Source code
                <FontAwesomeIcon icon={faGithub} />
              </Button>
            )}
          </Flex>
        </Flex>
        <Carousel images={metadata.urls.previewImages} />
        <Box rounded="3xl" py={8}>
          <ReactMarkdown
            children={content}
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            className={css.markdown}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={atomDark as any}
                    language={match[1]}
                    PreTag="div"
                    showLineNumbers
                    wrapLongLines
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </Box>
      </Container>
    </>
  );
};

export default ProjectArticle;
