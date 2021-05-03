import {Component, OnInit} from '@angular/core';
import {BASE_URL} from '../../../common/common';
import {IClasses} from '../../../interfaces/classes';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  public baseURL = BASE_URL;
  public data: IClasses | undefined;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getList<IClasses>('/classes', []).subscribe((data: IClasses) => {
      this.data = data;
      console.log(this.data.cards);
    });
  }

}
