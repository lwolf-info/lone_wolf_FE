import {Component, OnInit} from '@angular/core';
import {IClasses} from '../../../interfaces/classes';
import { ApiService } from '../../../services/api.service';
import { CARD_TYPES } from '../../../common/common';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  public data: IClasses | undefined;
  public cardTypes = CARD_TYPES;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getList<IClasses>('/classes', []).subscribe((data: IClasses) => {
      this.data = data;
    });
  }

}
