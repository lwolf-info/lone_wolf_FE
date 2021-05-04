import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() text = '';
  @Input() image = '';
  @Input() layout = '';

  constructor() { }

  ngOnInit(): void { }

}
