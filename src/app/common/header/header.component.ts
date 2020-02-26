import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() scrollTo = new EventEmitter()
  
  constructor() { }

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    console.log(el)
    this.scrollTo.emit(el);
  }

}
