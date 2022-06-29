type Project = {
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

type Blog = {
  id: string;
  title: string;
  summary: string;
  author: BlogAuthorInfo;
  tags: string[];
  previewImageURL: string;
};

type BlogAuthor = {
  name: string;
  icon: string;
  createdAt: string;
};

type ResponseStatus =
  | {
      success: true;
    }
  | {
      success: false;
      message: string;
    };
