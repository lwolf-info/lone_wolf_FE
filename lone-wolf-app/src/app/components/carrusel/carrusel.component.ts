import {Component, Input, OnInit} from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {
  slides: any[];
  @Input() sectionName = '';
  constructor() {
    this.slides = [
      {image: 'https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0='},
      {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGy5Gr2_hr0LEArYYySWMdNYm09lPo3ufTD5HoQs16TKe_-exuIrf9GtKQNFhWNCRIdc8&usqp=CAU'},
      {image: 'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270'}
    ];
  }

  ngOnInit(): void {
  }

}
