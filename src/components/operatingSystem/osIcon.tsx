import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useContext } from 'react';
import { OSContext } from './osContext';

interface IOSIconProps {
  data: Project;
  isSelected: boolean;
  setIsSelected: (id: number) => void;
  setOpenedProjects: (p: Project[]) => void;
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
        if (data.urls.liveDemo && data.urls.liveDemo !== '') {
          setOpenedWindows([...openedWindows, data]);
          setActiveWindowId(data.id);
        }
      }}
      {...rest}
    >
      <Image
        alt="Project icon"
        src={data.urls.icon}
        width={30}
        height={30}
        className="draggable"
      />
      <Text className="draggable" color="white">
        {data.title}
      </Text>
    </Box>
  );
};

export default OSIcon;
