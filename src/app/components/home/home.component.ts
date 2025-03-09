import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { PaginationControlsComponent } from "../paginationControls/paginationControls.component";
import { PostService } from '../../services/post.service';
import { ErrorMessageComponent } from '../errorMessage/errorMessage.component';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [HeaderComponent, ErrorMessageComponent, PaginationControlsComponent, LoadingComponent]
})
export class HomeComponent implements OnInit {

  readonly _PostService: PostService = inject(PostService)
  errorMessage: string = '';
  isLoading: boolean = false;
  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this._PostService.getPosts().subscribe({
        next: (data) => {
          this._PostService.posts = data;
          if (this._PostService.posts.length === 0) {
            this.errorMessage = 'No posts found';
          }
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = error.message;
        }
      })
    }, 2000);
  }

}
