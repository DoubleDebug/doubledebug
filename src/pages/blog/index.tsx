import { Container, Heading, Divider, Grid } from '@chakra-ui/react';
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
      <Container maxW={'7xl'} p={{ base: 4, md: 12 }}>
        <Heading as="h1" size="2xl" mb={6}>
          Latest blog articles
        </Heading>
        <Grid rowGap={4}>
          {latestBlogs.map((blog, index) => (
            <BlogArticlePreview
              key={`blog-article-preview-${index}`}
              {...blog}
            />
          ))}
        </Grid>
        <Divider my={{ base: 8, md: 16 }} />
        <Heading as="h1" size="2xl" mb={6}>
          Top 5 picks
        </Heading>
        <Grid rowGap={4}>
          {recommendedBlogs.map((blog, index) => (
            <BlogArticlePreview
              key={`blog-article-preview-${index}`}
              {...blog}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default BlogArticleList;
