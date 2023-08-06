import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { MainDecorations } from './main-decorations';
import { OtherDecorations } from './other-decorations';

@Component({
  selector: 'decorations',
  templateUrl: './decorations.component.html',
  styleUrls: ['./decorations.component.scss']
})
export class DecorationsComponent implements OnInit {
  mainDecorations: GalleryItem[];
  otherDecorations: GalleryItem[];
  title: string = MainDecorations[0].title

  ngOnInit() {
    this.mainDecorations = MainDecorations.map(photo =>
      new ImageItem({src: photo.srcUrl})
    )

    this.otherDecorations = OtherDecorations.map(photo =>
      new ImageItem({src: photo.srcUrl})
    )
  }

  setTitle(event) {
    this.title = MainDecorations[event.currIndex].title
  }
}
