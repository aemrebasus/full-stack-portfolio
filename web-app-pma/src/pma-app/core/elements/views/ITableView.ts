/**
 * Data to be shown as a table
 */
export interface ITableView<DataType> {
    /**
     * Head's value must match the key of the corresponding value in the DataType.
     */
    heads: string[];

    /**
     * Items
     */
    values: DataType[];
}

