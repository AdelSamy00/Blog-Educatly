import { NgFor } from '@angular/common';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { PostComponent } from "../post/post.component";

@Component({
  selector: 'app-paginationControls',
  imports: [NgxPaginationModule, NgFor, PostComponent],
  templateUrl: './paginationControls.component.html',
  styleUrls: ['./paginationControls.component.css']
})
export class PaginationControlsComponent implements OnInit {

  @Input() Posts: any[] = [];
  currentPage = signal(1);
  ngOnInit() {
  }

}
