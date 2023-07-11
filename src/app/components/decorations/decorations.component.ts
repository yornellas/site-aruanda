import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { Decorations } from './decorations';

@Component({
  selector: 'decorations',
  templateUrl: './decorations.component.html',
  styleUrls: ['./decorations.component.scss']
})
export class DecorationsComponent implements OnInit {
  decorations: GalleryItem[];
  title: string = Decorations[0].title

  ngOnInit() {
    this.decorations = Decorations.map(photo =>
      new ImageItem({src: photo.srcUrl})
    )
  }

  setTitle(event) {
    this.title = Decorations[event.currIndex].title
  }
}
