import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Acerca de',
        link: './about',
        index: 0
      }, {
        label: 'Clases',
        link: './classes',
        index: 1
      }, {
        label: 'Precios',
        link: './pricing',
        index: 2
      }, {
        label: 'Servicios',
        link: './services',
        index: 3
      }, {
        label: 'Horarios',
        link: './schedule',
        index: 4
      }, {
        label: 'Contacto',
        link: './contact',
        index: 5
      },
    ];
  }

  ngOnInit(): void {
  }
}
