import { WarningTwoIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { useWindowSize } from 'usehooks-ts';
import { OS_MIN_WINDOW_WIDTH } from '../../utils/constants';
import {
  getStartingPositionX,
  getStartingPositionY,
} from '../../utils/windows';
import { OSContext } from './osContext';
import OSDefaultIcons from './osDefaultIcons';
import OSIcon from './osIcon';
import OSStartMenu from './osStartMenu';
import OSTaskbar from './osTaskbar';
import OSWindow from './osWindow';

interface IOperatingSystemProps {
  projects: Project[];
}

const OperatingSystem: React.FC<IOperatingSystemProps> = (props) => {
  const [isStartMenuShown, setIsStartMenuShown] = useState<boolean>(false);
  const [selectedIconId, setSelectedIconId] = useState<string | undefined>();
  const [openedWindows, setOpenedWindows] = useState<Project[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<string | undefined>();
  const { width: windowWidth } = useWindowSize();
  const osRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  if (windowWidth <= OS_MIN_WINDOW_WIDTH) {
    return (
      <Box textAlign="center" height="60vh" mt={32}>
        <WarningTwoIcon boxSize={'50px'} color={'orange.300'} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Warning
        </Heading>
        <Text fontSize="2xl" color={'gray.500'} px={10}>
          To explore using the OS mode, please use a <b>desktop</b> browser.
        </Text>
        <Button
          variant="solid"
          colorScheme="orange"
          mt={4}
          onClick={() => router.push('/projects')}
        >
          Classic mode
        </Button>
      </Box>
    );
  }

  return (
    <OSContext.Provider
      value={{
        isStartMenuShown,
        setIsStartMenuShown,
        selectedIconId,
        setSelectedIconId,
        openedWindows,
        setOpenedWindows,
        activeWindowId,
        setActiveWindowId,
      }}
    >
      <Box display="grid" m="2.5rem" rounded="lg" ref={osRef}>
        <Box
          className="os-desktop"
          height="calc(100vh - 42px)"
          bgImage="url('/images/desktop_background.png')"
          bgSize="cover"
          paddingBottom="2rem"
          position="relative"
          roundedTop="lg"
          onClick={(e) => {
            e.stopPropagation();
            setIsStartMenuShown(false);
            setSelectedIconId(undefined);
          }}
        >
          <OSDefaultIcons />
          {props.projects.map((proj, index) => (
            <Draggable
              bounds="parent"
              handle=".draggable"
              positionOffset={{
                x: -60,
                y: 0,
              }}
              defaultPosition={{
                x: proj.osSettings?.iconOffset.x || 0,
                y: proj.osSettings?.iconOffset.y || 0,
              }}
              key={`os-icon-${index}`}
            >
              <OSIcon data={proj} isSelected={proj.id === selectedIconId} />
            </Draggable>
          ))}
          {openedWindows.map((proj, index) => (
            <Draggable
              bounds="parent"
              handle=".draggable"
              key={`os-window-${index}`}
              defaultPosition={{
                x: getStartingPositionX(osRef.current, proj),
                y: getStartingPositionY(osRef.current, proj),
              }}
            >
              <OSWindow project={proj} isActive={proj.id === activeWindowId} />
            </Draggable>
          ))}
        </Box>
        <OSTaskbar
          toggleShowStartMenu={() => setIsStartMenuShown(!isStartMenuShown)}
          osRef={osRef.current}
        >
          {isStartMenuShown && <OSStartMenu />}
        </OSTaskbar>
      </Box>
    </OSContext.Provider>
  );
};

export default OperatingSystem;
