import { Box } from '@chakra-ui/react';
import ProjectHeader from './projectHeader';

interface IProjectWindowProps {
  name: string;
  url: string;
  ref: any;
}

const ProjectWindow: React.FC<IProjectWindowProps & any> = ({
  url,
  name,
  ...rest
}) => {
  return (
    <Box
      display="grid"
      gridTemplateRows="30px auto"
      shadow="2xl"
      width="1000px"
      height="600px"
      border="1px solid silver"
      rounded="lg"
      top="5rem"
      left="5rem"
      resize="both"
      overflow="auto"
      minWidth={450}
      minHeight={30}
      {...rest}
    >
      <ProjectHeader name={name} />
      <Box padding="1rem">
        <iframe src={url} width="100%" height="100%" />
      </Box>
    </Box>
  );
};

export default ProjectWindow;
