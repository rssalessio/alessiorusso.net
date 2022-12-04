import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './pages/index/index.component';
import { DescriptionComponent } from './description/description.component';
import { ResearchComponent } from './research/research.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ActivitiesComponent } from './activities/activities.component';
import { MiscComponent } from './misc/misc.component';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    ResearchComponent,
    EducationComponent,
    ExperienceComponent,
    ActivitiesComponent,
    MiscComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
