import { Box, CloseButton, Text } from '@chakra-ui/react';

interface IProjectHeaderProps {
  name: string;
}

const ProjectHeader: React.FC<IProjectHeaderProps> = (props) => {
  return (
    <Box
      display="flex"
      columnGap="0.5rem"
      alignItems="center"
      width="full"
      height="30px"
      borderBottom="1px solid silver"
      className="projectHeader"
      paddingLeft="1rem"
      cursor="all-scroll"
    >
      <Box rounded="full" h="15px" w="15px" bgColor="green.300" />
      <Text variant="blue" size="lg">
        {props.name}
      </Text>
      <CloseButton ml="auto" />
    </Box>
  );
};

export default ProjectHeader;
