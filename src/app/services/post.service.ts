import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly _HttpClient: HttpClient = inject(HttpClient);
  posts: Post[] = [];
  getPosts():Observable<any> {
    return this._HttpClient.get('https://dev.to/api/articles');
  }

}
