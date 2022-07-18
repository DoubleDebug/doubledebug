import { HStack, Tag } from '@chakra-ui/react';

export const BlogTags: React.FC<{ tags: string[] }> = (props) => {
  return (
    <HStack flexWrap="wrap" gap={2}>
      {props.tags.map((tag) => {
        return (
          <Tag
            size={'md'}
            variant="solid"
            colorScheme="blue"
            key={tag}
            minWidth="none"
            whiteSpace="nowrap"
            marginInlineStart="0 !important"
          >
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};
