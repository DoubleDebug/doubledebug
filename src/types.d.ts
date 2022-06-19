type ProjectInfo = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  url: string;
  iconURL: string;
  previewImageURL?: string;
  osSettings: {
    windowSize: {
      w: number;
      h: number;
    };
    iconOffset: {
      x: number;
      y: number;
    };
  };
  showOnHomepage?: true;
};
