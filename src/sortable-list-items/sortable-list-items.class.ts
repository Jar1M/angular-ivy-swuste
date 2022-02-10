import {
  DataKeyEnum,
  ListItemsLink,
  ListItemsRow,
  SchemaDataTypeEnum,
} from './list-items/list-items.model';

export class ItemListSorter {
  private sortOrder = 1;

  constructor() {}

  public startSort(property: DataKeyEnum, order: string) {
    if (order === 'desc') {
      this.sortOrder = -1;
    }
    return (a: ListItemsRow, b: ListItemsRow) => {
      const cellA = a.data.find((cell) => cell.key === property);
      const cellB = b.data.find((cell) => cell.key === property);
      let res: number;
      if (
        cellA.type === SchemaDataTypeEnum.currency ||
        cellA.type === SchemaDataTypeEnum.string
      ) {
        res = this.sortData(cellA.value, cellB.value);
      }
      if (cellA.type === SchemaDataTypeEnum.date) {
        res = this.sortData(
          new Date(cellA.value as Date),
          new Date(cellB.value as Date)
        );
      }

      if (cellA.type === SchemaDataTypeEnum.link) {
        res = this.sortData(
          (cellA.value as ListItemsLink).text,
          (cellB.value as ListItemsLink).text
        );
      }
      return res;
    };
  }

  private sortData(a, b) {
    if (a < b) {
      return -1 * this.sortOrder;
    } else if (a > b) {
      return 1 * this.sortOrder;
    } else {
      return 0 * this.sortOrder;
    }
  }
}
