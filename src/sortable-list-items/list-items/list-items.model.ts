type currency = number;
export type link = ListItemsLink;
type date = Date; //...
type button = ListItemsButton;
type icon = ListItemsIcon;
export type ListItemsDataType = string | date | currency | link | button | icon;

export interface ListItemsLink {
  href: string;
  /**
   * @description navigate to href using location.assign()
   */
  redirect?: {
    /**
     * @description set true to redirect the target opening in a new window
     */
    newWindow: boolean;
  };
  text: string;
}

export interface ListItemsButton {
  label: string;
  link: ListItemsLink;
  disabled: boolean;
}

export interface ListItemsIcon {
  src: string;
}

// ----------------------------------------------------------------------------

export interface ListItemsCell {
  key: DataKeyEnum;
  value: ListItemsDataType;
  type: SchemaDataTypeEnum;
}
export interface ListItemsColumn {
  colHeader: ColumnDef;
  colBody: ListItemsCell[];
}

export interface ListItemsRow {
  id: number;
  data: ListItemsCell[];
}

export interface SchemaDef {
  columnDef: ColumnDef[];
  rows: ListItemsRow[];
}

export interface ColumnDef {
  key: DataKeyEnum;
  sortable: boolean;
  label: string;
}

export enum SchemaDataTypeEnum {
  string = 'string',
  currency = 'currency',
  date = 'date',
  boolean = 'boolean',
  link = 'link',
  button = 'button',
  icon = 'icon',
  tooltip = 'tooltip',
}

export enum DataKeyEnum {
  createTime = 'createTime',
  jobNumber = 'jobNumber',
  policyNumber = 'policyNumber',
  amount = 'amount',
  status = 'status',
  licensePlate = 'licensePlate',
  plateNumber_AIT = 'plateNumber_AIT',
  accountHolderName = 'accountHolderName',
}

// STUB

export const COLUMNS: ColumnDef[] = [
  {
    sortable: true,
    key: DataKeyEnum.createTime,
    label: 'Creata',
  },
  {
    key: DataKeyEnum.jobNumber,
    sortable: false,
    label: 'Numero di rinnovo',
  },
  {
    key: DataKeyEnum.policyNumber,
    sortable: false,
    label: 'Numero di polizza',
  },
  {
    key: DataKeyEnum.amount,
    sortable: true,
    label: 'Premio totale',
  },
  {
    key: DataKeyEnum.status,
    sortable: false,
    label: 'Stato',
  },
];

export const BODY: ListItemsRow[] = [
  {
    id: 1,
    data: [
      {
        key: DataKeyEnum.jobNumber,
        type: SchemaDataTypeEnum.link,
        value: {
          href: '/submission-details/21000026700',
          text: '21000026700',
        } as ListItemsLink,
      },

      {
        key: DataKeyEnum.policyNumber,
        type: SchemaDataTypeEnum.link,
        value: {
          href: '/policy-details/10000000500002',
          text: '10000000500002',
        } as ListItemsLink,
      },
      {
        key: DataKeyEnum.createTime,
        type: SchemaDataTypeEnum.date,
        value: new Date('2021-04-09T14:54:18Z'),
      },
      {
        key: DataKeyEnum.amount,
        type: SchemaDataTypeEnum.currency,
        value: 1749.29,
      },
      {
        key: DataKeyEnum.status,
        type: SchemaDataTypeEnum.button,
        value: {
          disabled: false,
          label: 'Acquista',
          link: { href: 'hkhkjh' },
        } as ListItemsButton,
      },
    ],
  },
  {
    id: 2,
    data: [
      {
        key: DataKeyEnum.createTime,
        type: SchemaDataTypeEnum.date,
        value: new Date('2022-04-09T14:54:18Z'),
      },
      {
        key: DataKeyEnum.jobNumber,
        type: SchemaDataTypeEnum.link,
        value: {
          href: '/submission-details/21000026703',
          text: '21000026703',
        } as ListItemsLink,
      },
      {
        key: DataKeyEnum.policyNumber,
        type: SchemaDataTypeEnum.link,
        value: {
          href: '/policy-details/10000000500015',
          text: '10000000500015',
        } as ListItemsLink,
      },
      {
        key: DataKeyEnum.amount,
        type: SchemaDataTypeEnum.currency,
        value: 524.14,
      },
      {
        key: DataKeyEnum.status,
        type: SchemaDataTypeEnum.icon,
        value: {
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Antu_dialog-warning.svg/2048px-Antu_dialog-warning.svg.png',
        } as ListItemsIcon,
      },
    ],
  },
];

export const schema: SchemaDef = { columnDef: COLUMNS, rows: BODY };
