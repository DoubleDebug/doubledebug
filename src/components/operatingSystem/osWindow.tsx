import css from '../../styles/OSWindow.module.css';
import { Box, ColorMode, useColorMode } from '@chakra-ui/react';
import OSWindowHeader from './osWindowHeader';
import { useContext, useEffect, useRef, useState } from 'react';
import { OSContext } from './osContext';
import { playPopupAnimation } from '../../utils/animations/popup';
import { playPopoutAnimation } from '../../utils/animations/popout';
import OSWindowSidebar from './osWindowSidebar';

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
  const windowRef = useRef<HTMLDivElement | undefined>();

  useEffect(() => {
    playPopupAnimation(windowRef?.current);
  }, []);

  useEffect(() => {
    if (isClosing) {
      playPopoutAnimation(windowRef?.current);
      setIsClosing(false);
    }
  }, [isClosing]);

  return (
    <Box
      shadow="2xl"
      rounded="lg"
      bgColor={getWindowColor(colorMode, isActive)}
      zIndex={isActive ? 1 : 0}
      {...rest}
      height={project.windowSize.h}
      width={`calc(${project.windowSize.w}px + 3px)`}
      overflow="hidden"
      className={`os-window ${css.window}`}
      ref={windowRef}
    >
      <OSWindowHeader
        windowTitle={project.title}
        windowId={project.id}
        setIsClosing={setIsClosing}
        windowRef={windowRef.current}
      />
      <Box
        display="flex"
        columnGap="1rem"
        padding="1rem"
        onMouseDown={() => setActiveWindowId(project.id)}
      >
        <iframe
          src={project.url}
          height="100%"
          width="100%"
          scrolling="no"
          style={{
            width: `calc(${project.windowSize.w}px - 2rem)`,
            backgroundColor: 'white',
          }}
        />
        <OSWindowSidebar data={project} />
      </Box>
    </Box>
  );
};

export default OSWindow;
