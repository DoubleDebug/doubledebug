import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

interface IOSIconProps {
  data: ProjectInfo;
}

const OSIcon: React.FC<IOSIconProps & any> = ({ data, ...rest }) => {
  return (
    <Box
      display="grid"
      justifyItems="center"
      rowGap="5px"
      textAlign="center"
      maxWidth={100}
      maxHeight={100}
      overflow="hidden"
      ml="5rem"
      {...rest}
    >
      <Image src={data.iconURL} width={30} height={30} className="draggable" />
      <Text className="draggable" color="white">
        {data.title}{' '}
      </Text>
    </Box>
  );
};

export default OSIcon;
