import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RootRouteModule } from './route/route.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RootRouteModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
