type ProjectInfo = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  urls: {
    liveDemo?: string;
    icon: string;
    previewImage: string;
    githubRepo: string;
  };
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
