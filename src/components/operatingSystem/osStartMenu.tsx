import css from '../../styles/OSStartMenu.module.css';
import {
  Box,
  Button,
  Grid,
  Heading,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBabyCarriage,
  faBars,
  faBomb,
  faBug,
  faBusSimple,
  faCheck,
  faCloudSun,
  faCog,
  faDiceD6,
  faFolder,
  faImage,
  faPlay,
  faPowerOff,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faBluetooth,
  faDiscord,
  faDropbox,
} from '@fortawesome/free-brands-svg-icons';

const OSStartMenu: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      bgColor={colorMode === 'light' ? 'gray.300' : 'gray.700'}
      className={css.startMenu}
    >
      <Grid className="sidebar-icons">
        <Button>
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <Stack mt="auto">
          <Button>
            <FontAwesomeIcon icon={faUserCircle} />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faImage} />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faCog} />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faPowerOff} />
          </Button>
        </Stack>
      </Grid>
      <Grid className="shortcuts" mb="auto" rowGap={2}>
        <Heading mb={5}>
          <Text fontSize="lg">START MENU</Text>
        </Heading>
        <Grid gridTemplateColumns="29% 29% 29%" columnGap={2} rowGap={2}>
          <StartMenuApps
            icons={[
              faFolder,
              faBabyCarriage,
              faBluetooth,
              faPlay,
              faBomb,
              faBug,
              faBusSimple,
              faCheck,
              faCloudSun,
              faDiceD6,
              faDiscord,
              faDropbox,
            ]}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

const StartMenuApps: React.FC<{ icons: IconProp[] }> = (props) => {
  return (
    <>
      {props.icons.map((icon, index) => (
        <Button height={14} rounded="lg" key={`windows-app-${index}`}>
          <FontAwesomeIcon icon={icon} />
        </Button>
      ))}
    </>
  );
};

export default OSStartMenu;
