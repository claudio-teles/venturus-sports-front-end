import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './posts.modul';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private urlPosts: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  exibirPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.urlPosts);
  }

}
