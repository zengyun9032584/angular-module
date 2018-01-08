import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FilterComponent } from './filter.component';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: FilterComponent
      }
    ])
  ],
  exports: [FilterComponent],
  declarations: [FilterPipe, FilterComponent]
})
export class FilterModule { }
