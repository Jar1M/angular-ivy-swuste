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
    if (this.isSortable) {
      this.addSorterArrows();
    }
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

  private addSorterArrows() {
    const arrowUpSrc =
      'https://www.pinclipart.com/picdir/middle/130-1303175_navigate-up-arrow-comments-icon-arrow-up-svg.png';

    const arrowDownSrc =
      'https://www.clipartmax.com/png/middle/442-4426111_down-soul-spirit-icon-arrow-down-icon-svg.png';

    // add cursor pointer
    this.renderer.setStyle(
      this.targetElement.nativeElement,
      'cursor',
      'pointer'
    );
    //arrow up
    const imgUp = this.renderer.createElement('img');
    this.renderer.setAttribute(imgUp, 'src', arrowUpSrc);
    this.renderer.addClass(imgUp, 'arrows__icon');
    this.renderer.addClass(imgUp, 'arrows__icon__up');
    //arrow down
    const imgDown = this.renderer.createElement('img');
    this.renderer.setAttribute(imgDown, 'src', arrowDownSrc);
    this.renderer.addClass(imgDown, 'arrows__icon');
    this.renderer.addClass(imgDown, 'arrows__icon__down');

    //append span
    const spanArrow = this.renderer.createElement('span');
    this.renderer.appendChild(spanArrow, imgUp);
    this.renderer.appendChild(spanArrow, imgDown);
    this.renderer.addClass(spanArrow, 'arrows__container');

    this.renderer.appendChild(this.targetElement.nativeElement, spanArrow);
  }
}
