import { IImage } from './image';

export interface IAbout {
  id: string;
  direction: 'left' | 'right';
  background: string;
  carousel: IImage[];
  description: string;
  image: IImage;
}
