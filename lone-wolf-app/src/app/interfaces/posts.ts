import { IImage } from './image';

export interface IPost {
  title: string;
  description: string;
  enabled: boolean;
  images: IImage[];
}
