
import { IFormControl } from './IFormView';

export interface ISelectDialogView<DataType, Meta> {
    meta: Meta;
    input: IFormControl;
    data: DataType[];
}
