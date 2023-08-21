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
  ngOnInit(): void {}

  scroll(element: any) {
    window.scrollTo(element.yPosition);
  }

  openDropDown() {
    this.open = true;
    console.log('test', this.open);
  }

  closeDropDown(subject: any) {
    this.navigate(subject);
    this.open = false;
  }

  navigate(listen: any) {
    this.scroller.scrollToAnchor(`${listen}`);
  }
}
