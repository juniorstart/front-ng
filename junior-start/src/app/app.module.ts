import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'projects/material/src/public-api';
import { HomeModule } from './home/home.module';
import { TodolistsModule } from './todolists/todolists.module';
import { RecruitmentInfoModule } from './recruitment-info/recruitment-info.module';
import { UiToolbarModule } from 'projects/ui-toolbar/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    TodolistsModule,
    RecruitmentInfoModule,
    UiToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
