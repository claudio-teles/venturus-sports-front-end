import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photos } from './photos.module';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) {}

  private urlPhots: string = 'https://jsonplaceholder.typicode.com/photos';

  mostrarPhotos(): Observable<Photos[]> {
    return this.http.get<Photos[]>(this.urlPhots);
  }

}
