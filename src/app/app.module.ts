import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'projects/material/src/public-api';
import { TodolistsModule } from './todolists/todolists.module';
import { RecruitmentInfoModule } from './recruitment-info/recruitment-info.module';
import { UiToolbarModule } from 'projects/ui-toolbar/src/public-api';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UiLoginModule } from 'projects/ui-login/src/public-api';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuardService } from './guards/auth-guard.service';
import { RequestInterceptor } from './interceptors/requestInterceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RecruitmentInfoModule,
    HttpClientModule,
    MaterialModule,
    RecruitmentInfoModule,
    TodolistsModule,
    UiToolbarModule,
    UiLoginModule
  ],
  providers: [CookieService,AuthGuardService,{
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
