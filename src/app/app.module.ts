import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { LandingComponent } from './landing/landing.component';
import { ResumeCardComponent } from './resume-card/resume-card.component';
import { SkillsComponent } from './skills/skills.component';

const appRoutes: Routes = [
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'jobs',
    component: ExperienceComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
    {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'landing'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    EducationComponent,
    ExperienceComponent,
    LandingComponent,
    ResumeCardComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
