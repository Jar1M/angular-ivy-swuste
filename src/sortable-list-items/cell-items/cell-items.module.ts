import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellItemsComponent } from './cell-items.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule],
  declarations: [CellItemsComponent],
  exports: [CellItemsComponent],
})
export class CellItemsModule {}
