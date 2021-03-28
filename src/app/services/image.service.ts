import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ImageResponseModel } from '../models/imageResponseModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  apiUrl = 'https://localhost:44300/api​/Images​/GetAll';

  constructor(private httpClient:HttpClient) { }

  getImages():Observable<ImageResponseModel>{
    return this.httpClient.get<ImageResponseModel>(this.apiUrl);
  }
}
