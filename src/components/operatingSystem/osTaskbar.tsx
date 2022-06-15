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
  faHouse,
  faVolumeLow,
  faWifi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { formatDate, formatTime } from '../../utils/formatTime';
import { OSContext } from './osContext';

function getTaskbarWindowColor(colorMode: ColorMode, isActive: boolean) {
  if (colorMode === 'light') {
    if (isActive) {
      return 'gray.400';
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

const OSTaskbarButton: React.FC<any> = ({ children, ...rest }) => {
  const { colorMode } = useColorMode();

  return (
    <Button
      px={0}
      bgColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
      _hover={{ bgColor: colorMode === 'light' ? 'gray.300' : 'gray.500' }}
      {...rest}
    >
      {children}
    </Button>
  );
};

interface IOSTaskbarProps {
  toggleShowStartMenu: () => void;
}

const OSTaskbar: React.FC<IOSTaskbarProps & any> = (props) => {
  const { colorMode } = useColorMode();
  const { openedWindows, activeWindowId, setActiveWindowId } =
    useContext(OSContext);
  return (
    <Box
      width="full"
      bgColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
      display="flex"
      alignItems="center"
      pr="0.5rem"
      position="relative"
      className="os-taskbar"
    >
      {props.children}
      <OSTaskbarButton onClick={() => props.toggleShowStartMenu()}>
        <FontAwesomeIcon icon={faHouse} />
      </OSTaskbarButton>
      <Flex className="opened-windows">
        {openedWindows.map((proj: ProjectInfo, index: number) => (
          <Button
            key={`taskbar-window-${index}`}
            display="flex"
            leftIcon={<Image src={proj.iconURL} width="20px" />}
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
          <FontAwesomeIcon icon={faWifi} size="lg" />
        </OSTaskbarButton>
        <OSTaskbarButton>
          <FontAwesomeIcon icon={faVolumeLow} size="lg" />
        </OSTaskbarButton>
        <OSTaskbarButton>
          <FontAwesomeIcon icon={faBatteryThreeQuarters} size="lg" />
        </OSTaskbarButton>
        <Grid textAlign="center" ml={2}>
          <Text fontSize="sm">{formatTime()}</Text>
          <Text fontSize="sm">{formatDate()}</Text>
        </Grid>
      </Box>
    </Box>
  );
};

export default OSTaskbar;
