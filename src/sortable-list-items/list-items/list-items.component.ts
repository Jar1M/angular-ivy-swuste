import { Component, Input } from '@angular/core';
import { ListItems } from './list-items.class';
import { ColumnDef, ListItemsRow, schema, SchemaDef } from './list-items.model';

@Component({
  selector: 'conte-dw-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
})
export class ListItemsComponent {
  private _headers: ColumnDef[];
  get headers() {
    return this._headers;
  }

  private _rows: ListItemsRow[];
  get rows() {
    return this._rows;
  }

  /**
   * @description used to assign different css to the list
   * @param  {string;} public dataListClass
   * @returns string
   */
  @Input() public listItemsClass: string;

  /**
   * @description generic input data to show in the list in combination with dataList if needed
   * @param  {any;} inputData
   * @returns any
   */
  @Input() schema: SchemaDef = schema;

  constructor() {
    let listItems = new ListItems(this.schema);
    this._headers = listItems.headers;
    this._rows = listItems.rows;
  }
}
