import { Component } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { PhotoCollection } from './photo-collection';

@Component({
  selector: 'photo-collection',
  templateUrl: './photo-collection.component.html',
  styleUrls: ['./photo-collection.component.scss']
})
export class PhotoCollectionComponent {
  photos: GalleryItem[];
  photoTitle: string = PhotoCollection[0].title

  ngOnInit() {
    this.photos = PhotoCollection.map(photo =>
      new ImageItem({src: photo.srcUrl, thumb: photo.previewUrl})
    )
  }

  setPhotoTitle(event) {
    this.photoTitle = PhotoCollection[event.currIndex].title
  }
}
