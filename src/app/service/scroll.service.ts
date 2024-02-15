import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor() {}

  scrollToAnkerWithOffset(anchor: string, offset: number) {
    const element = document.getElementById(anchor);

    if (element) {
      const rect = element.getBoundingClientRect();
      const topPosition = window.scrollY + rect.top - offset;

      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  }
  scrollToDesiredAnchor(listen: any) {
    this.scrollToAnkerWithOffset(`${listen}`, 100);
  }
}
