import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { DataKeyEnum, ListItemsRow } from './list-items/list-items.model';
import { ItemListSorter } from './sortable-list-items.class';

@Directive({
  selector: '[sortable-list]',
})
export class SortableListItemsDirective implements AfterViewInit {
  @Input() rows: ListItemsRow[];
  @Input() isSortable: boolean;

  constructor(private renderer: Renderer2, private targetElement: ElementRef) {}
  ngAfterViewInit(): void {
    const child = this.renderer.createElement('img');
    child.setAttribute(
      'src',
      'https://www.pinclipart.com/picdir/middle/130-1303175_navigate-up-arrow-comments-icon-arrow-up-svg.png'
    );
    child.setAttribute('class', 'arrow-up');
    this.renderer.insertBefore(
      this.targetElement.nativeElement.parent,
      child,
      this.targetElement.nativeElement.nextSibling
    );
  }

  @HostListener('click')
  sortData() {
    const sorter: ItemListSorter = new ItemListSorter();

    const elem: any = this.targetElement.nativeElement;
    const order: string = elem.getAttribute('data-order');
    const property: DataKeyEnum = elem.getAttribute('data-name');
    if (this.isSortable) {
      this.rows.sort(sorter.startSort(property, order));
      let newOrder: string = order === 'desc' ? 'asc' : 'desc';
      elem.setAttribute('data-order', newOrder);
    }
  }
}
