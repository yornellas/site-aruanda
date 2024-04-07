import { Component } from '@angular/core';
import { NewsInterface } from 'src/app/shared/interfaces';
import { News } from './news';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  news: NewsInterface[] = News
}
