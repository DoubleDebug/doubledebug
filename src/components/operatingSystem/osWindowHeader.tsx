import { Box, CloseButton, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { OSContext } from './osContext';

interface IOSWindowHeaderProps {
  windowId: number;
  windowTitle: string;
  setIsClosing: (c: boolean) => void;
}

const OSWindowHeader: React.FC<IOSWindowHeaderProps> = (props) => {
  const { openedWindows, setOpenedWindows, setActiveWindowId } =
    useContext(OSContext);

  return (
    <Box
      display="flex"
      columnGap="0.5rem"
      alignItems="center"
      width="calc(100% + 1rem)"
      height="30px"
      borderBottom="1px solid silver"
      className="draggable"
      paddingLeft="1rem"
      cursor="all-scroll"
      onMouseDown={() => setActiveWindowId(props.windowId)}
    >
      <Box rounded="full" h="15px" w="15px" bgColor="green.300" />
      <Text variant="blue" size="lg">
        {props.windowTitle}
      </Text>
      <CloseButton
        ml="auto"
        onClick={() => {
          props.setIsClosing(true);
          setTimeout(() => {
            setOpenedWindows(
              openedWindows.filter((w) => w.id !== props.windowId)
            );
          }, 300);
        }}
      />
    </Box>
  );
};

export default OSWindowHeader;
