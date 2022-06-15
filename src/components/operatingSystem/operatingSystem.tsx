import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import Draggable from 'react-draggable';
import { OSContext } from './osContext';
import OSIcon from './osIcon';
import OSStartMenu from './osStartMenu';
import OSTaskbar from './osTaskbar';
import OSWindow from './osWindow';

interface IOperatingSystemProps {
  projects: ProjectInfo[];
}

const OperatingSystem: React.FC<IOperatingSystemProps> = (props) => {
  const [isStartMenuShown, setIsStartMenuShown] = useState<boolean>(false);
  const [selectedIconId, setSelectedIconId] = useState<number | undefined>();
  const [openedWindows, setOpenedWindows] = useState<ProjectInfo[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<number | undefined>();

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
      <Box display="grid" m="2.5rem" rounded="lg">
        <Box
          className="os-desktop"
          height="100vh"
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
          {props.projects.map((proj, index) => (
            <Draggable
              bounds="parent"
              handle=".draggable"
              positionOffset={{
                x: -40,
                y: 0,
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
            >
              <OSWindow project={proj} isActive={proj.id === activeWindowId} />
            </Draggable>
          ))}
        </Box>
        <OSTaskbar
          toggleShowStartMenu={() => setIsStartMenuShown(!isStartMenuShown)}
        >
          {isStartMenuShown && <OSStartMenu />}
        </OSTaskbar>
      </Box>
    </OSContext.Provider>
  );
};

export default OperatingSystem;
