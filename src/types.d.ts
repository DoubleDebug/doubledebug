type ProjectInfo = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  url: string;
  iconURL: string;
  windowSize: {
    w: number;
    h: number;
  };
  iconOffset: {
    x: number;
    y: number;
  };
};
