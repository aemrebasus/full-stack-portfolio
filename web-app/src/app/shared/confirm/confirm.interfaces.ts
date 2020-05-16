
export type IConfirmationType = 'save' | 'delete' | 'edit' | 'update';

export interface IConfirmMeta {
    id?: string;
    type?: IConfirmationType;
    title?: string;
    message?: string;
    confirmLabel?: string;
    cancelLabel?: string;
}

export interface IConfirmationResult {
    type?: IConfirmationType;
    status?: boolean;
    message?: string;
}

export class PreDefinedConfirmationMetas {
    /**
     * Confirmation modal for each operation;
     */
    deleteConfirmation: IConfirmMeta = {
        id: 'delete',
        type: 'delete',
        title: 'Confirmation of Deleting',
        cancelLabel: 'Cancel',
        confirmLabel: 'Confirm',
        message: 'Would you like to delete the item?',
    };

    editConfirmation: IConfirmMeta = {
        ...this.deleteConfirmation,
        id: 'edit',
        type: 'edit',
        title: 'Confirmation of Updating',
        message: 'Would you like to edit the item?',
    };


    saveConfirmation: IConfirmMeta = {
        ...this.deleteConfirmation,
        id: 'save',
        type: 'save',
        title: 'Confirmation of Saving',
        message: 'Would you like to save the item?',
    };
}
