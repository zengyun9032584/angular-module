import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindDirective } from './bind/bind.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [BindDirective],
  declarations: [BindDirective]
})
export class DirectiveModule { }
