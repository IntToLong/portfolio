export interface ProjectType {
  number: number;
  title: string;
  description: string;
  demo: string;
  github: string;
  technologies: string[];
  imgSrc?: string;
  imgAlt?: string;
}

export interface ProjectType {
  ariaLabel: {
    demo: string;
    github: string;
  };
}
