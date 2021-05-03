import { IImage } from './image';
import { IInfoCard } from './info-card';
import { Theme } from './theme';


export interface IClasses {
  id: string;
  title: string;
  carousel: IImage[];
  cards: IInfoCard[];
  theme: Theme;
}
