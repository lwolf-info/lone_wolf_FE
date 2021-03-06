import { IImage } from './image';
import { Theme } from './theme';


export interface IAbout {
  id: string;
  title: string;
  direction: 'left' | 'right';
  background: string;
  carousel: IImage[];
  description: string;
  image: IImage;
  theme: Theme;
}
