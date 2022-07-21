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
  const filePath = path.join(process.cwd(), 'public/data/blogs/metadata.json');
  const blogMetadataRaw = await fs.readFile(filePath);
  const blogMetadata = JSON.parse(blogMetadataRaw.toString());

  const paths = blogMetadata.blogs.map((b: any) => ({ params: { id: b.id } }));

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
  const breadcrumbColor = useColorModeValue('gray.800', 'gray.400');
  const contentBgColor = useColorModeValue('gray.100', 'white');
  return (
    <>
      <Head>
        <title>{metadata.title} | Double Debug</title>
        <meta name="description" content="Web developer portfolio website" />
      </Head>
      <Container
        maxW={{ base: 'initial', md: '7xl' }}
        p={{ base: 4, md: 12 }}
        pt={8}
      >
        {!isMobile && (
          <Breadcrumb
            fontWeight="medium"
            fontSize="lg"
            color={breadcrumbColor}
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
        <Heading
          as="h1"
          size="3xl"
          mb={8}
          textAlign={{ base: 'center', md: 'left' }}
        >
          {metadata.title}
        </Heading>
        <Flex mb={6} flexDirection={{ base: 'column', md: 'row' }}>
          <Flex
            ml={{ base: 'auto', md: 0 }}
            mr={{ base: 'auto', md: 0 }}
            alignItems="center"
          >
            <BlogTags tags={metadata.tags} />
          </Flex>
          <Box ml="auto" mr={{ base: 'auto', md: 0 }}>
            <BlogAuthor
              name={metadata.author.name}
              icon={metadata.author.icon}
              createdAt={metadata.author.createdAt}
            />
          </Box>
        </Flex>
        <Box bg={contentBgColor} rounded="3xl" p={8} color="black">
          <Markdown content={content} />
        </Box>
      </Container>
    </>
  );
};

export default BlogArticle;
