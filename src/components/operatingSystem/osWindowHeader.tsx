import { Box, Button, CloseButton, Flex, Text } from '@chakra-ui/react';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useRef, useState } from 'react';
import { playCompressAnimation } from '../../utils/animations/compress';
import { playExpandAnimation } from '../../utils/animations/expand';
import { playTranslateButtonsAnimation } from '../../utils/animations/translateButtons';
import { SIDEBAR_WIDTH } from '../../utils/constants/misc';
import { getCurrentPositions, refreshWindows } from './operatingSystemActions';
import { OSContext } from './osContext';

interface IOSWindowHeaderProps {
  windowId: string;
  windowTitle: string;
  setIsClosing: (c: boolean) => void;
  windowRef: HTMLDivElement | undefined;
}

const OSWindowHeader: React.FC<IOSWindowHeaderProps> = (props) => {
  const { openedWindows, setOpenedWindows, activeWindowId, setActiveWindowId } =
    useContext(OSContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

  return (
    <Box
      display="flex"
      columnGap="0.5rem"
      alignItems="center"
      height="30px"
      borderBottom="1px solid silver"
      className="draggable"
      paddingLeft="1rem"
      cursor="all-scroll"
      onMouseDown={() => setActiveWindowId(props.windowId)}
    >
      <Box
        rounded="full"
        h="15px"
        w="15px"
        bgColor={activeWindowId === props.windowId ? 'green.300' : 'gray.400'}
      />
      <Text variant="blue" size="lg">
        {props.windowTitle}
      </Text>
      <Flex
        ml="auto"
        alignItems="center"
        height="full"
        ref={buttonsRef}
        style={{ transform: `translateX(calc(-${SIDEBAR_WIDTH}px - 1rem))` }}
      >
        <Button
          className="btn-question-mark"
          bgColor="transparent"
          _hover={{
            bgColor: 'whiteAlpha.100',
          }}
          height="full"
          w="5px"
          onClick={() => {
            if (isExpanded) {
              playCompressAnimation(props.windowRef);
              playTranslateButtonsAnimation(buttonsRef.current, 'left');
            } else {
              playExpandAnimation(props.windowRef);
              playTranslateButtonsAnimation(buttonsRef.current, 'right');
            }
            setIsExpanded(!isExpanded);
          }}
        >
          <FontAwesomeIcon icon={isExpanded ? faAnglesLeft : faAnglesRight} />
        </Button>
        <CloseButton
          ml={0}
          onClick={() => {
            props.setIsClosing(true);
            setTimeout(() => {
              setOpenedWindows(
                openedWindows.filter((w) => w.id !== props.windowId)
              );
            }, 300);

            const currentWindowPositions = getCurrentPositions();
            setTimeout(() => {
              refreshWindows(currentWindowPositions);
            }, 400);
          }}
        />
      </Flex>
    </Box>
  );
};

export default OSWindowHeader;
