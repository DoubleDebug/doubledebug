import { useContext } from 'react';
import Draggable from 'react-draggable';
import { OSContext } from './osContext';
import OSIcon from './osIcon';

const OSDefaultIcon: React.FC<{
  data: Project;
}> = (props) => {
  const { selectedIconId } = useContext(OSContext);

  return (
    <Draggable
      bounds="parent"
      handle=".draggable"
      positionOffset={{
        x: -60,
        y: 0,
      }}
      defaultPosition={{
        x: props.data.osSettings.iconOffset.x,
        y: props.data.osSettings.iconOffset.y,
      }}
      key={`os-icon-${props.data.id}`}
    >
      <OSIcon data={props.data} isSelected={props.data.id === selectedIconId} />
    </Draggable>
  );
};

const OSDefaultIcons: React.FC = () => {
  return (
    <>
      <OSDefaultIcon
        data={{
          id: 'this-pc',
          description: 'This PC',
          urls: {
            icon: 'https://i.imgur.com/7eYAcYq.png',
            previewImage: '',
            githubRepo: '',
          },
          technologies: [],
          title: 'This PC',
          osSettings: {
            iconOffset: {
              x: 0,
              y: 20,
            },
            windowSize: {
              h: 0,
              w: 0,
            },
          },
        }}
      />
      <OSDefaultIcon
        data={{
          id: 'my-documents',
          description: 'My documents',
          urls: {
            icon: 'https://i.imgur.com/35AldHk.png',
            previewImage: '',
            githubRepo: '',
          },
          technologies: [],
          title: 'My documents',
          osSettings: {
            iconOffset: {
              x: 0,
              y: 60,
            },
            windowSize: {
              h: 0,
              w: 0,
            },
          },
        }}
      />
      <OSDefaultIcon
        data={{
          id: 'recycle-bin',
          description: 'Recycle Bin',
          urls: {
            icon: 'https://i.imgur.com/Uv4nn20.png',
            previewImage: '',
            githubRepo: '',
          },
          technologies: [],
          title: 'Recycle Bin',
          osSettings: {
            iconOffset: {
              x: 0,
              y: 600,
            },
            windowSize: {
              h: 0,
              w: 0,
            },
          },
        }}
      />
    </>
  );
};

export default OSDefaultIcons;
