import { Component, Input, OnInit } from '@angular/core';

import { IImage } from '../../interfaces/image';
import { BASE_URL } from '../../common/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() sectionName = '';
  @Input() images: IImage[] = [];

  public baseUrl = BASE_URL;

  constructor() { }

  ngOnInit(): void { }

}
