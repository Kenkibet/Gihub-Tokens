import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbaComponent } from './components/navba/navba.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { ProfileService } from './services/profile.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbaComponent,
    ProfileComponent,
    ProfileFormComponent,
    HighlightDirective,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
