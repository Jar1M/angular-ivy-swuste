import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CellItemsModule } from '../cell-items/cell-items.module';
import { Sort } from '../sort/sort.class';
import { SortDirective } from '../sort/sort.directive';
import { SortModule } from '../sort/sort.module';
import { ListItemsComponent } from './list-items.component';

@NgModule({
  declarations: [ListItemsComponent],
  imports: [CommonModule, CellItemsModule, SortModule],
  exports: [ListItemsComponent],
})
export class ListItemsModule {}
