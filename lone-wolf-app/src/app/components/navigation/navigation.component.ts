import { MediaMatcher  } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DICTIONARY } from '../../common/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public matcher: MediaQueryList;
  public navLinks = DICTIONARY.navLinks;
  public activeLinkIndex = -1;
  public isMobile: boolean;
  public isMenuOpen: boolean;

  constructor(private router: Router, public mediaMatcher: MediaMatcher) {
    this.matcher = this.mediaMatcher.matchMedia('(max-width: 900px)');
    this.isMobile = false;
    this.isMenuOpen = false;
  }

  ngOnInit(): void {
    this.isMobile = this.matcher.matches ? true : false;
  }

  menuToggle(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
