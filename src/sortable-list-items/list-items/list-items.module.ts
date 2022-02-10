import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CellItemsModule } from '../cell-items/cell-items.module';
import { SortableListItemsDirective } from '../sortable-list-items.directive';
import { ListItemsComponent } from './list-items.component';

@NgModule({
  declarations: [ListItemsComponent, SortableListItemsDirective],
  imports: [CommonModule, CellItemsModule],
  exports: [ListItemsComponent],
})
export class ListItemsModule {}
