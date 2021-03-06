import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  images:Image[] = [];
  dataLoaded = false;
  constructor(private imageService:ImageService) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(){
    this.imageService.getImages().subscribe(response=>{
      this.images= response.data
      this.dataLoaded=true;
    })
  }

}
