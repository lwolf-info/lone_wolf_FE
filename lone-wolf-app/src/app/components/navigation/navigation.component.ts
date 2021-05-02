import { MediaMatcher  } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  matcher: MediaQueryList;
  navLinks: any[];
  activeLinkIndex = -1;
  isMobile: boolean;
  isMenuOpen: boolean;

  constructor(private router: Router, public mediaMatcher: MediaMatcher) {
    this.matcher = this.mediaMatcher.matchMedia('(max-width: 900px)');
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
    this.isMobile = false;
    this.isMenuOpen = false;
  }

  ngOnInit(): void {
    this.isMobile = this.matcher.matches ? true : false;
    console.log(this.isMobile);
  }

  menuToggle(): void {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }
}
