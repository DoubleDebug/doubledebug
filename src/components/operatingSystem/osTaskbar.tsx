import { Text, Box, Button, Grid, useColorMode } from '@chakra-ui/react';
import {
  faBatteryThreeQuarters,
  faHouse,
  faVolumeLow,
  faWifi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatDate, formatTime } from '../../utils/formatTime';

const OSTaskbarButton: React.FC<any> = ({ children, ...rest }) => {
  const { colorMode } = useColorMode();

  return (
    <Button
      bgColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
      _hover={{ bgColor: colorMode === 'light' ? 'gray.300' : 'gray.500' }}
      {...rest}
    >
      {children}
    </Button>
  );
};

const OSTaskbar: React.FC<{ toggleShowStartMenu: () => void }> = (props) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      width="full"
      bgColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
      display="flex"
      alignItems="center"
      pr="0.5rem"
    >
      <OSTaskbarButton onClick={() => props.toggleShowStartMenu()}>
        <FontAwesomeIcon icon={faHouse} />
      </OSTaskbarButton>
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
        <Grid textAlign="center">
          <Text fontSize="sm">{formatTime()}</Text>
          <Text fontSize="sm">{formatDate()}</Text>
        </Grid>
      </Box>
    </Box>
  );
};

export default OSTaskbar;
