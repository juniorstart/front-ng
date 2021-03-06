import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'projects/material/src/public-api';
import { TodolistsModule } from './components/todolists/todolists.module';
import { RecruitmentInfoModule } from './components/recruitment-info/recruitment-info.module';
import { UiToolbarModule } from 'projects/ui-toolbar/src/public-api';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuardService } from './guards/auth-guard.service';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LoginModule } from './components/login/login.module';
import { RegisterModule } from './components/register/register.module';
import { InputComponent } from './components/chat/input/input.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessageContainerComponent } from './components/chat/message-container/message-container.component';
import { RoomListComponent } from './components/chat/room-list/room-list.component';
import { UserListComponent } from './components/chat/user-list/user-list.component';
import {MatTabsModule} from '@angular/material';
import {JwtModule} from '@auth0/angular-jwt';
import {RegisterComponent} from './components/register/register.component';
import {CommonModule} from '@angular/common';

export function tokenGetter() {
  return localStorage.getItem('auth-token');
}

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ChatComponent,
    MessageContainerComponent,
    RoomListComponent,
    UserListComponent
  ],
  imports: [
    RegisterModule,
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RecruitmentInfoModule,
    HttpClientModule,
    MaterialModule,
    RecruitmentInfoModule,
    TodolistsModule,
    UiToolbarModule,
    LoginModule,
    RegisterModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatTabsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [CookieService, AuthGuardService, {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
