import {
  Heading,
  HStack,
  Tag,
  Link,
  Text,
  Image,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';

export const BlogTags: React.FC<{ tags: string[] }> = (props) => {
  return (
    <HStack spacing={2} mt={8}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="blue" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor: React.FC<BlogAuthor> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={props.icon}
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.createdAt}</Text>
    </HStack>
  );
};

export const BlogArticlePreview: React.FC<Blog> = (blog) => {
  return (
    <Box
      marginTop={{ base: '1', sm: '5' }}
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
    >
      <Box display="flex" flex="1" marginRight="3" alignItems="center">
        <Box m={{ base: '0 0 7% 0', md: '5%' }}>
          <Link href={`/blog/${blog.id}`}>
            <Image
              borderRadius="lg"
              src={blog.previewImageURL}
              alt="Blog preview"
              objectFit="contain"
            />
          </Link>
        </Box>
      </Box>
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: '3', sm: '0' }}
      >
        <Heading title={blog.title}>
          <Link
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
            href={`/blog/${blog.id}`}
          >
            {blog.title}
          </Link>
        </Heading>
        <BlogTags tags={blog.tags} />
        <Text
          as="p"
          my={2}
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize="lg"
        >
          {blog.summary}
        </Text>
        <BlogAuthor
          name={blog.author.name}
          icon={blog.author.icon}
          createdAt={blog.author.createdAt}
        />
      </Box>
    </Box>
  );
};
