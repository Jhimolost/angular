import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  @ViewChild('info' , {static: false}) info: ElementRef;
  @ViewChild('delivery' , {static: false}) delivery: ElementRef;
  @ViewChild('contact' , {static: false}) contact: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  scroll($event) {
    let elem;
    switch($event){
      case 'info':
        elem = this.info;
        break;
      case 'delivery':
        elem = this.delivery;
        break;
      case 'contact':
        elem = this.contact;
        break;
    }
        elem.nativeElement.scrollIntoView({behavior:"smooth"});
        window.scrollBy(0, -70);
  }

}
