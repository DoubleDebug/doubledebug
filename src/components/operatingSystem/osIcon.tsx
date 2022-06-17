import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useContext } from 'react';
import { OSContext } from './osContext';

interface IOSIconProps {
  data: ProjectInfo;
  isSelected: boolean;
  setIsSelected: (id: number) => void;
  setOpenedProjects: (p: ProjectInfo[]) => void;
}

const OSIcon: React.FC<IOSIconProps & any> = ({
  isSelected,
  data,
  ...rest
}) => {
  const {
    setSelectedIconId,
    openedWindows,
    setOpenedWindows,
    setActiveWindowId,
  } = useContext(OSContext);

  return (
    <Box
      className="os-desktop-icon"
      display="grid"
      justifyItems="center"
      rowGap="5px"
      textAlign="center"
      maxWidth={110}
      maxHeight={100}
      overflow="hidden"
      ml="5rem"
      cursor="default"
      border={isSelected ? '1px dotted silver' : undefined}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedIconId(data.id);
      }}
      onDoubleClick={() => {
        if (data.url !== '') {
          setOpenedWindows([...openedWindows, data]);
          setActiveWindowId(data.id);
        }
      }}
      {...rest}
    >
      <Image src={data.iconURL} width={30} height={30} className="draggable" />
      <Text className="draggable" color="white">
        {data.title}
      </Text>
    </Box>
  );
};

export default OSIcon;
