import { Component, OnInit } from '@angular/core';
import { IAbout } from '../../../interfaces/about';
import { ApiService } from '../../../services/api.service';
import { BASE_URL } from '../../../common/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public baseURL = BASE_URL;
  public data: IAbout | undefined;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getList<IAbout>('/about', []).subscribe((data: IAbout) => {
      this.data = data;
    });
  }

}
