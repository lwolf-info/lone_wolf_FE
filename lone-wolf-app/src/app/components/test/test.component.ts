import { Component, OnInit } from '@angular/core';
import { IPost } from '../../interfaces/posts';
import { BASE_URL } from '../../common/common';
import { ApiService } from '../../services/api.service';
import { IAbout } from '../../interfaces/about';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public posts: IPost[] | undefined;
  public baseURL = BASE_URL;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // getting posts
    this.api.getList<IPost[]>('/posts', []).subscribe((data: IPost[]) => {
      this.posts = data;
    });

    // getting about info
    this.api.getList<IAbout>('/about', []).subscribe((data: IAbout) => {
      console.log(data);
    });
  }

}
