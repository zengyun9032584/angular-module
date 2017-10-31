import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter.component';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FilterComponent],
  declarations: [FilterPipe, FilterComponent]
})
export class FilterModule {}
