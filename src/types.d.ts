type Project = {
  id: string;
  title: string;
  description: string;
  duration?: string;
  technologies: string[];
  urls: {
    liveDemo?: string;
    icon: string;
    previewImages: string[];
    githubRepo: string;
    isPrivate?: true;
  };
  osSettings?: {
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
  isRecommended?: true;
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

type GithubContributionsData = {
  totalContributions: number;
  weeks: {
    contributionDays: {
      contributionCount: number;
      weekday: number;
      date: string;
      color: string;
    }[];
  }[];
};
