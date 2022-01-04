import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  /* register all UI entities (components, directives, & pipes) */
  declarations: [
    AppComponent
  ],
  /* register other dependent modules */
  imports: [
    BrowserModule
  ],
  /* register all non-ui entites (services) */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
