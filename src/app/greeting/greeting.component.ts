import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent {
  constructor(private scroller: ViewportScroller, private router: Router) {}

  navigateToContact() {
    this.scroller.scrollToAnchor('#contact');
  }
}
