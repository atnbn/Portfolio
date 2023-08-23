import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ScrollService } from '../service/scroll.service';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  open: boolean = false;
  isPlaying: boolean = false;

  constructor(private scroller: ViewportScroller) {}

  ngOnInit(): void {}

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

  playSound() {
    let audio = new Audio();
    audio.src = '../assets/sounds/sound.m4r';
    if (!this.isPlaying) {
      this.isPlaying = true;
      audio.load();
      audio.play();
    }

    audio.onended = () => {
      this.isPlaying = false;
    };
  }
}
