import { Component, inject, Input, OnInit } from '@angular/core';
import { Post } from '../../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  imports: []
})
export class PostComponent implements OnInit {
  @Input() post: Post = {} as Post;
  ngOnInit() {
    
  }

}
