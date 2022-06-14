import css from '../../styles/OSStartMenu.module.css';
import { Box, useColorMode } from '@chakra-ui/react';

const OSStartMenu: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      position="absolute"
      bottom={163}
      left={0}
      width={300}
      height={400}
      bgColor={colorMode === 'light' ? 'gray.300' : 'gray.700'}
      className={css.startMenu}
    >
      <h1>Start menu</h1>
    </Box>
  );
};

export default OSStartMenu;
