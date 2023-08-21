import {
  ElementRef,
  Injectable,
  Renderer2,
  RendererFactory2,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      this.renderer.setProperty(element, 'scrollTop', element.offsetTop);
    }
  }
}
