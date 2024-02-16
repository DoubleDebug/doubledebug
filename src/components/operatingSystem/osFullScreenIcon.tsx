import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress, faExpand } from '@fortawesome/free-solid-svg-icons';

const OSFullScreenIcon = () => {
  return (
    <FontAwesomeIcon
      icon={document.fullscreenElement ? faCompress : faExpand}
      size="lg"
      title={document?.fullscreenElement ? 'Exit full screen' : 'Full screen'}
    />
  );
};

export default OSFullScreenIcon;
