import css from '../../styles/Blog.module.css';
import {
  Box,
  Container,
  Flex,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { fetchBlog } from '../../utils/fetching/fetchBlogs';
import { BlogAuthor, BlogTags } from './components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import path from 'path';
import fs from 'fs/promises';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

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
      <Container maxW={'7xl'} p={12} pt={8}>
        <Heading as="h1" size="3xl" my={8}>
          {metadata.title}
        </Heading>
        <Flex alignItems="center" mb={6}>
          <Box ml={4}>
            <BlogTags tags={metadata.tags} />
          </Box>
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

export default BlogArticle;
