import { IconType } from "react-icons";

export interface Iservice {
  title: string;
  about: string;
  Icon: IconType;
}

export interface Iskill {
  name: string;
  level: string;
  Icon: IconType;
}

export interface Iproject {
  name: string;
  description: string;
  image_path: string;
  deploy_url: string;
  github_url: string;
  category: Category[];
  key_tech: string[];
}

export type Category =
  | "React"
  | "Node"
  | "Flask"
  | "Firebase"
  | "MongoDB"
  | "API";
