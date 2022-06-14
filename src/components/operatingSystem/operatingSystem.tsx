import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import Draggable from 'react-draggable';
import OSIcon from './osIcon';
import OSStartMenu from './osStartMenu';
import OSTaskbar from './osTaskbar';

interface IOperatingSystemProps {
  projects: ProjectInfo[];
}

const OperatingSystem: React.FC<IOperatingSystemProps> = (props) => {
  const [isStartMenuShown, setIsStartMenuShown] = useState(false);
  //const [openedProjects, setOpenedProjects] = useState<ProjectInfo[]>([]);

  return (
    <Box width="full" display="grid">
      <Box
        className="desktop"
        height="80vh"
        bgImage="url('/images/desktop_background.png')"
        bgSize="cover"
        paddingBottom="2rem"
        position="relative"
        onClick={(e) => {
          e.stopPropagation();
          setIsStartMenuShown(false);
        }}
      >
        {props.projects.map((proj, index) => (
          <Draggable
            bounds="parent"
            handle=".draggable"
            positionOffset={{
              x: -80,
              y: 64,
            }}
            key={`os-icon-${index}`}
          >
            <OSIcon data={proj} />
          </Draggable>
        ))}
      </Box>
      <OSTaskbar
        toggleShowStartMenu={() => {
          console.log('hey');
          setIsStartMenuShown(!isStartMenuShown);
        }}
      />
      {isStartMenuShown && <OSStartMenu />}
    </Box>
  );
};

export default OperatingSystem;
