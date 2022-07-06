import { HStack, Text, Image } from '@chakra-ui/react';

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
