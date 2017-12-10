import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollComponent } from './scroll.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoComponent,
      }
    ])
  ],
  declarations: [
    ScrollComponent,
    DemoComponent
  ]
})
export class ScrollModule { }
