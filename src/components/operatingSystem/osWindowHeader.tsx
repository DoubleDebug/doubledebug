import { Box, CloseButton, Text } from '@chakra-ui/react';

interface IOSWindowHeaderProps {
  windowTitle: string;
}

const OSWindowHeader: React.FC<IOSWindowHeaderProps> = (props) => {
  return (
    <Box
      display="flex"
      columnGap="0.5rem"
      alignItems="center"
      width="full"
      height="30px"
      borderBottom="1px solid silver"
      className="draggable"
      paddingLeft="1rem"
      cursor="all-scroll"
    >
      <Box rounded="full" h="15px" w="15px" bgColor="green.300" />
      <Text variant="blue" size="lg">
        {props.windowTitle}
      </Text>
      <CloseButton ml="auto" />
    </Box>
  );
};

export default OSWindowHeader;
