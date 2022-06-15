import css from '../../styles/OSStartMenu.module.css';
import {
  Box,
  Button,
  Grid,
  Heading,
  Skeleton,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCog,
  faImage,
  faPowerOff,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

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
          {Array(12)
            .fill(null)
            .map((_, index) => (
              <Skeleton
                height={14}
                rounded="lg"
                speed={1.5}
                key={`start-menu-skeleton-${index}`}
              />
            ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default OSStartMenu;
