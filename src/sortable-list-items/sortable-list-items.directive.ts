import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { DataKeyEnum, ListItemsRow } from './list-items/list-items.model';
import { ItemListSorter } from './sortable-list-items.class';

@Directive({
  selector: '[sortable-list=true]',
})
export class SortableListItemsDirective {
  @Input('rows') rows: ListItemsRow[];

  constructor(private renderer: Renderer2, private targetElement: ElementRef) {}

  @HostListener('click')
  sortData() {
    const sorter: ItemListSorter = new ItemListSorter();

    const elem: any = this.targetElement.nativeElement;

    const order: string = elem.getAttribute('data-order');

    const property: DataKeyEnum = elem.getAttribute('data-name');

    this.rows.sort(sorter.startSort(property, order));

    let newOrder: string = order === 'desc' ? 'asc' : 'desc';
    elem.setAttribute('data-order', newOrder);
  }
}
