import { Box, Container, Heading } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { fetchBlog } from '../../utils/fetching/fetchBlogs';
import { BlogAuthor, BlogTags } from './components';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import path from 'path';
import fs from 'fs/promises';

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

interface IBlogArticleProps {
  content: string;
  metadata: Blog;
}

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
  return (
    <>
      <Head>
        <title>{metadata.title} | Double Debug</title>
        <meta name="description" content="Web developer portfolio website" />
      </Head>
      <Container maxW={'7xl'} p={12} pt={0}>
        <BlogTags tags={metadata.tags} />
        <Heading as="h1" size="3xl" mt={4} mb={8}>
          {metadata.title}
        </Heading>
        <BlogAuthor
          name={metadata.author.name}
          icon={metadata.author.icon}
          createdAt={metadata.author.createdAt}
        />
        <Box bg="white" rounded="3xl" mt={8} p={8} color="black">
          <ReactMarkdown children={content} />
        </Box>
      </Container>
    </>
  );
};

export default BlogArticle;
