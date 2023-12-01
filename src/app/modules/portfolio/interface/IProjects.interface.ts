export interface IProjects {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  width: string;
  height: string;
  links: Array<{
    name: string;
    href: string;
  }>;
}
