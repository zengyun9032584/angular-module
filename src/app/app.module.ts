import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollModule } from './scroll/scroll.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
