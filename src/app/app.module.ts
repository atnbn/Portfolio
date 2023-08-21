import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GreetingComponent } from './greeting/greeting.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillStackComponent } from './skill-stack/skill-stack.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { Router } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { DropdownComponent } from './dropdown/dropdown.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GreetingComponent,
    AboutMeComponent,
    SkillStackComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    DropdownComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
