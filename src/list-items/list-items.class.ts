import {
  ColumnDef,
  DataKeyEnum,
  ListItemsCell,
  ListItemsColumn,
  ListItemsRow,
  SchemaDataTypeEnum,
  SchemaDef,
} from './list-items.model';

export class ListItems {
  private _columns: ListItemsColumn[];
  private _rows: ListItemsRow[];
  private _headers: ColumnDef[];

  get columns() {
    return this._columns;
  }

  get rows() {
    return this._rows;
  }

  get headers() {
    return this._headers;
  }
  constructor(schema: SchemaDef) {
    const sortedSchema = this.sortSchemaByHeaders(schema);
    this._rows = sortedSchema.rows;
    this._headers = sortedSchema.columnDef;
  }

  private sortSchemaByHeaders(schema: SchemaDef): SchemaDef {
    const headerKey: DataKeyEnum[] = schema.columnDef.map((col) => col.key);
    const cellMatrix: ListItemsCell[][] = schema.rows.map((row) => row.data);
    cellMatrix.map((cells: ListItemsCell[]) =>
      cells.sort(
        (prevCell: ListItemsCell, nextCell: ListItemsCell) =>
          headerKey.indexOf(prevCell.key) - headerKey.indexOf(nextCell.key)
      )
    );
    return schema;
  }
  /* constructor(schema: SchemaDef) {
    const columns: ListItemsColumn[] = schema.columnDef.map((colDef) => {
      const colHeader: string = colDef.label;
      let colBody: ListItemsCell[] = [];
      schema.rows.map(({ data }) => {
        colBody = data.map((data) =>
          colDef.key === data.key
            ? {
                key: data.key,
                type: data.type,
                value: data.value,
              }
            : {
                key: colDef.key,
                type: SchemaDataTypeEnum.string,
                value: 'N/D',
              }
        );
      });
      return { colHeader, colBody };
    });

    const headers: string[] = schema.columnDef.map((colDef) => colDef.label);

    let rows: ListItemsRow[] = schema.rows.map(({ data }) => {
      const cells: ListItemsCell[] = data.map((data) => ({
        key: data.key,
        type: data.type,
        value: data.value,
      }));
      return { cells };
    });
    this._columns = columns;
    this._rows = rows;
    this._headers = headers;
  } */
}
