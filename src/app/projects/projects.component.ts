import { Component, ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ScrollService } from '../service/scroll.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor(public scrollService: ScrollService) {}
}
