import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BindDirective } from './bind/bind.directive';
import { DivBindComponent } from './demo/demo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DivBindComponent
      }
    ])
  ],
  exports: [BindDirective],
  declarations: [BindDirective,
    DivBindComponent
  ]
})
export class DirectiveModule { }
