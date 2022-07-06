import { HStack, Tag } from '@chakra-ui/react';

export const BlogTags: React.FC<{ tags: string[] }> = (props) => {
  return (
    <HStack spacing={2}>
      {props.tags.map((tag) => {
        return (
          <Tag
            size={'md'}
            variant="solid"
            colorScheme="blue"
            key={tag}
            minWidth="none"
          >
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};
