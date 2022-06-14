import css from '../styles/ProjectWindow.module.css';
import { Box } from '@chakra-ui/react';
import OSWindowHeader from './osWindowHeader';

interface IOSWindowProps {
  title: string;
  url: string;
  ref: any;
}

const OSWindow: React.FC<IOSWindowProps & any> = ({ url, title, ...rest }) => {
  return (
    <Box shadow="2xl" rounded="lg" {...rest} className={css.container}>
      <OSWindowHeader windowTitle={title} />
      <Box padding="1rem">
        <iframe src={url} width="100%" height="100%" />
      </Box>
    </Box>
  );
};

export default OSWindow;
