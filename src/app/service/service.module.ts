import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AsyncDemoComponent } from './demo/demo.component';
import { AsyncService } from './async.service';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: AsyncDemoComponent
      }
    ])
  ],
  declarations: [AsyncDemoComponent],
  providers: [AsyncService]
})
export class ServiceModule { }
