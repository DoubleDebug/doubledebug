import css from '../../styles/OSWindow.module.css';
import { Box, ColorMode, useColorMode } from '@chakra-ui/react';
import OSWindowHeader from './osWindowHeader';
import { useContext, useState } from 'react';
import { OSContext } from './osContext';

interface IOSWindowProps {
  project: ProjectInfo;
  isActive: boolean;
}

function getWindowColor(colorMode: ColorMode, isActive: boolean) {
  if (colorMode === 'light') {
    if (isActive) {
      return 'gray.100';
    } else {
      return 'whiteAlpha.100';
    }
  } else {
    if (isActive) {
      return 'gray.700';
    } else {
      return 'whiteAlpha.100';
    }
  }
}

const OSWindow: React.FC<IOSWindowProps & any> = ({
  project,
  isActive,
  ...rest
}) => {
  const { colorMode } = useColorMode();
  const { setActiveWindowId } = useContext(OSContext);
  const [isClosing, setIsClosing] = useState(false);

  return (
    <Box
      shadow="2xl"
      rounded="lg"
      bgColor={getWindowColor(colorMode, isActive)}
      zIndex={isActive ? 1 : 0}
      {...rest}
      className={`os-window ${css.window} ${isClosing ? css.closing : ''}`}
    >
      <OSWindowHeader
        windowTitle={project.title}
        windowId={project.id}
        setIsClosing={setIsClosing}
      />
      <Box
        padding="1rem 0 0 1rem"
        onMouseDown={() => setActiveWindowId(project.id)}
      >
        <iframe
          src={project.url}
          width="100%"
          height="100%"
          style={{ backgroundColor: 'white' }}
        />
      </Box>
    </Box>
  );
};

export default OSWindow;
