import { Container, Heading, Divider } from '@chakra-ui/react';
import { BlogArticlePreview } from '../../components/blog/BlogArticlePreview';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import path from 'path';
import fs from 'fs/promises';

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'public/data/blogs/metadata.json');
  const blogsRaw = await fs.readFile(filePath);
  const blogsJson = JSON.parse(blogsRaw.toString());

  return {
    props: {
      blogs: blogsJson.blogs,
    },
  };
};

interface IBlogArticleListProps {
  blogs: Blog[];
}

const BlogArticleList: React.FC<IBlogArticleListProps> = ({ blogs }) => {
  const latestBlogs = blogs.slice(Math.max(blogs.length - 3, 0));
  const recommendedBlogs = blogs.filter((b) => b.isRecommended);

  return (
    <>
      <Head>
        <title>Blog | Double Debug</title>
        <meta name="description" content="Web developer portfolio website" />
      </Head>
      <Container maxW={'7xl'} p="12">
        <Heading as="h1" size="2xl">
          Latest blog articles
        </Heading>
        {latestBlogs.map((blog, index) => (
          <BlogArticlePreview key={`blog-article-preview-${index}`} {...blog} />
        ))}
        <Divider my={16} />
        <Heading as="h1">Top 5 picks</Heading>
        {recommendedBlogs.map((blog, index) => (
          <BlogArticlePreview key={`blog-article-preview-${index}`} {...blog} />
        ))}
      </Container>
    </>
  );
};

export default BlogArticleList;
