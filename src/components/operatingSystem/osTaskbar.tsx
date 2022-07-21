import {
  Text,
  Box,
  Button,
  Image,
  Grid,
  useColorMode,
  Flex,
  ColorMode,
} from '@chakra-ui/react';
import {
  faBatteryThreeQuarters,
  faCompress,
  faExpand,
  faHouse,
  faVolumeLow,
  faWifi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { formatDate, formatTime } from '../../utils/misc/formatTime';
import { OSContext } from './osContext';

function getTaskbarWindowColor(colorMode: ColorMode, isActive: boolean) {
  if (colorMode === 'light') {
    if (isActive) {
      return 'blackAlpha.300';
    } else {
      return 'gray.200';
    }
  } else {
    if (isActive) {
      return 'gray.700';
    } else {
      return 'gray.600';
    }
  }
}

const OSTaskbarButton: React.FC<{
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}> = ({ children, onClick }) => {
  const { colorMode } = useColorMode();

  return (
    <Button
      px={0}
      bgColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
      _hover={{ bgColor: colorMode === 'light' ? 'gray.300' : 'gray.500' }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

interface IOSTaskbarProps {
  toggleShowStartMenu: () => void;
  osRef: HTMLDivElement | undefined;
}

const OSTaskbar: React.FC<IOSTaskbarProps & any> = (props) => {
  const { colorMode } = useColorMode();
  const { openedWindows, activeWindowId, setActiveWindowId } =
    useContext(OSContext);
  return (
    <Box
      height="42px"
      width="full"
      bgColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
      display="flex"
      alignItems="center"
      position="relative"
      className="os-taskbar"
    >
      {props.children}
      <OSTaskbarButton onClick={() => props.toggleShowStartMenu()}>
        <FontAwesomeIcon icon={faHouse} />
      </OSTaskbarButton>
      <Flex className="opened-windows">
        {openedWindows.map((proj: Project, index: number) => (
          <Button
            key={`taskbar-window-${index}`}
            display="flex"
            leftIcon={
              <Image alt="Taskbar icon" src={proj.urls.icon} width="20px" />
            }
            overflow="hidden"
            bgColor={getTaskbarWindowColor(
              colorMode,
              activeWindowId === proj.id
            )}
            onClick={() => setActiveWindowId(proj.id)}
          >
            <Text>{proj.title}</Text>
          </Button>
        ))}
      </Flex>
      <Box className="system-tray" ml="auto" display="flex" alignItems="center">
        <OSTaskbarButton>
          <FontAwesomeIcon icon={faWifi} size="lg" title="Internet" />
        </OSTaskbarButton>
        <OSTaskbarButton>
          <FontAwesomeIcon icon={faVolumeLow} size="lg" title="Sound" />
        </OSTaskbarButton>
        <OSTaskbarButton>
          <FontAwesomeIcon
            icon={faBatteryThreeQuarters}
            size="lg"
            title="Battery"
          />
        </OSTaskbarButton>
        <Grid textAlign="center" ml={2} mr={2}>
          <Text fontSize="sm">{formatTime()}</Text>
          <Text fontSize="sm">{formatDate()}</Text>
        </Grid>
        <OSTaskbarButton
          onClick={() => {
            if (!props.osRef) return;
            if (document.fullscreenElement) {
              document.exitFullscreen();
            } else {
              (props.osRef as HTMLDivElement).requestFullscreen();
            }
          }}
        >
          <FontAwesomeIcon
            icon={document.fullscreenElement ? faCompress : faExpand}
            size="lg"
            title={
              document.fullscreenElement ? 'Exit full screen' : 'Full screen'
            }
          />
        </OSTaskbarButton>
      </Box>
    </Box>
  );
};

export default OSTaskbar;
