import { Container, Heading, Divider } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs/promises';
import { BlogArticlePreview } from './components';
import { fetchBlogMetadata } from '../../utils/fetching/fetchBlogs';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'public/data/blogs.json');
  const blogIdsRaw = await fs.readFile(filePath);
  const blogIdsJson = JSON.parse(blogIdsRaw.toString());

  const allBlogIds: string[] = blogIdsJson.blogs.map((b: any) => b.id);
  const latestBlogIds: string[] = allBlogIds.slice(
    Math.max(allBlogIds.length - 3, 0)
  );
  const recommendedBlogIds: string[] = blogIdsJson.blogs
    .filter((b: any) => b.isRecommended)
    .map((b: any) => b.id);

  const blogIdsToFetch = Array.from(
    new Set([...latestBlogIds, ...recommendedBlogIds])
  );
  const blogs = await fetchBlogMetadata(blogIdsToFetch);
  const latestBlogs = blogs
    .filter((b) => latestBlogIds.includes(b.id))
    .reverse();
  const recommendedBlogs = blogs.filter((b) =>
    recommendedBlogIds.includes(b.id)
  );

  return {
    props: {
      latestBlogs,
      recommendedBlogs,
    },
  };
};

interface IBlogArticleListProps {
  latestBlogs: Blog[];
  recommendedBlogs: Blog[];
}

const BlogArticleList: React.FC<IBlogArticleListProps> = (props) => {
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
        {props.latestBlogs.map((blog, index) => (
          <BlogArticlePreview key={`blog-article-preview-${index}`} {...blog} />
        ))}
        <Divider my={16} />
        <Heading as="h1">Top 5 picks</Heading>
        {props.recommendedBlogs.map((blog, index) => (
          <BlogArticlePreview key={`blog-article-preview-${index}`} {...blog} />
        ))}
      </Container>
    </>
  );
};

export default BlogArticleList;
