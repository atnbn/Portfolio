import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-stack',
  templateUrl: './skill-stack.component.html',
  styleUrls: ['./skill-stack.component.scss'],
})
export class SkillStackComponent {
  constructor(private scroller: ViewportScroller) {}
  navigateToContact() {
    this.scroller.scrollToAnchor('#contact');
  }
}
