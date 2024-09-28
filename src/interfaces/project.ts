import type { Technology } from "./technology";

export interface Project {
  title: string;
  desc: string;
  techs: string[];
  images: string[];
  links: string[];
}
