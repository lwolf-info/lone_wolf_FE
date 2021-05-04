import {Component, Input, OnInit} from '@angular/core';
import {IGenCard} from '../../interfaces/general-card';
import {CARD_TYPES, DICTIONARY} from '../../common/common';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardType = '';
  @Input() cardData: IGenCard = {
    headline: '',
    intensity: '',
    level: '',
    duration: '',
    description: '',
  };

  public infoCardSummary = DICTIONARY.infoCardSummary;
  public cardTypes = CARD_TYPES;

  constructor() { }

  ngOnInit(): void { }

}
