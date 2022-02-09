import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListSorterDirective } from './item-list-sorter.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ItemListSorterDirective],
  exports: [ItemListSorterDirective],
})
export class ItemListSorterModule {}
