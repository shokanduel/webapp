import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    RouterTestingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
