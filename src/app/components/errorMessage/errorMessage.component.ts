import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-errorMessage',
  templateUrl: './errorMessage.component.html',
  styleUrls: ['./errorMessage.component.css']
})
export class ErrorMessageComponent implements OnInit {

  @Input() errorMessage!: string ;
  constructor() { }

  ngOnInit() {
  }

}
