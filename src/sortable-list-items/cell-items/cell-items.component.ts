import { Component, Input, OnInit } from '@angular/core';
import {
  ListItemsButton,
  ListItemsCell,
  ListItemsDataType,
  ListItemsIcon,
  ListItemsLink,
  SchemaDataTypeEnum,
} from '../list-items/list-items.model';

@Component({
  selector: 'conte-dw-cell-items',
  templateUrl: './cell-items.component.html',
  styleUrls: ['./cell-items.component.scss'],
})
export class CellItemsComponent implements OnInit {
  @Input() public inputCell: ListItemsCell;

  public get dataType(): typeof SchemaDataTypeEnum {
    return SchemaDataTypeEnum;
  }

  asLink(val: ListItemsDataType): ListItemsLink {
    return val as ListItemsLink;
  }

  asDate(val: ListItemsDataType): Date {
    return val as Date;
  }

  asCurrency(val: ListItemsDataType): number {
    return val as number;
  }

  asButton(val: ListItemsDataType): ListItemsButton {
    return val as ListItemsButton;
  }

  asIcon(val: ListItemsDataType): ListItemsIcon {
    return val as ListItemsIcon;
  }

  constructor() {}

  ngOnInit() {}
}
