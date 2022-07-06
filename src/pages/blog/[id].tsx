import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Heading,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { fetchBlog } from '../../utils/fetching/fetchBlogs';
import Head from 'next/head';
import path from 'path';
import fs from 'fs/promises';
import { BlogTags } from '../../components/blog/BlogTags';
import { BlogAuthor } from '../../components/blog/BlogAuthor';
import { Markdown } from '../../components/blog/Markdown';

export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), 'public/data/blogs.json');
  const blogIdsRaw = await fs.readFile(filePath);
  const blogIds = JSON.parse(blogIdsRaw.toString());

  const paths = blogIds.blogs.map((b: any) => ({ params: { id: b.id } }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogData = await fetchBlog(context.params?.id as string);

  return {
    props: blogData,
  };
};

interface IBlogArticleProps {
  content: string;
  metadata: Blog;
}

const BlogArticle: React.FC<IBlogArticleProps> = ({ content, metadata }) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <Head>
        <title>{metadata.title} | Double Debug</title>
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
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/blog/${metadata.id}`}>
                {metadata.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        )}
        <Heading as="h1" size="3xl" mb={8}>
          {metadata.title}
        </Heading>
        <Flex mb={6}>
          <BlogTags tags={metadata.tags} />
          <Box ml="auto">
            <BlogAuthor
              name={metadata.author.name}
              icon={metadata.author.icon}
              createdAt={metadata.author.createdAt}
            />
          </Box>
        </Flex>
        <Box
          bg={useColorModeValue('gray.100', 'white')}
          rounded="3xl"
          p={8}
          color="black"
        >
          <Markdown content={content} />
        </Box>
      </Container>
    </>
  );
};

export default BlogArticle;
