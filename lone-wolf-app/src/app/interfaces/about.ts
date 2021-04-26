import { IImage } from './image';

export interface IAbout {
  id: string;
  alignment: 'left' | 'right';
  cardText: string;
  cardImage: IImage;
}
