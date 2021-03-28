import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserResponseModel } from '../models/userResponseModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://localhost:44300/api/Users/getall';
  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<UserResponseModel>{
    return this.httpClient.get<UserResponseModel>(this.apiUrl);
  }
}
