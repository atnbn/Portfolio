import { Component, ElementRef, ViewChild } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ScrollService } from '../service/scroll.service';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  open: boolean = false;
  constructor(private scroller: ViewportScroller) {}

  scroll(element: any) {
    window.scrollTo(element.yPosition);
  }

  openDropDown() {
    this.open = true;
    console.log('test', this.open);
  }
  closeDropDownWithoutLink() {
    this.open = false;
  }
  closeDropDown(subject: any) {
    this.open = false;
    this.navigate(subject);
  }

  navigate(listen: any) {
    this.scroller.scrollToAnchor(`${listen}`);
  }
}
