
export type IConfirmationType = 'save' | 'delete' | 'edit' | 'update' | 'back' | 'cancel' | 'close' | 'reset' | 'open';

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

/**
 * Confirmation modal for each operation;
 */
export class ConfirmationMetas {
    static all() {
        return [
            ConfirmationMetas.delete(),
            ConfirmationMetas.save(),
            ConfirmationMetas.back(),
            ConfirmationMetas.edit(),
            ConfirmationMetas.close(),
            ConfirmationMetas.reset(),
            ConfirmationMetas.open()
        ];
    }
    static delete() {

        const deleteConfirmation: IConfirmMeta = {
            id: 'delete',
            type: 'delete',
            title: 'Confirmation of Deleting',
            cancelLabel: 'Cancel',
            confirmLabel: 'Confirm',
            message: 'Would you like to delete the item?',
        };

        return deleteConfirmation;
    }

    static edit() {

        const editConfirmation: IConfirmMeta = {
            ...ConfirmationMetas.delete(),
            id: 'edit',
            type: 'edit',
            title: 'Confirmation of Updating',
            message: 'Would you like to edit the item?',
        };
        return editConfirmation;
    }

    static save() {

        const saveConfirmation: IConfirmMeta = {
            ...ConfirmationMetas.delete(),
            id: 'save',
            type: 'save',
            title: 'Confirmation of Saving',
            message: 'Would you like to save the item?',
        };
        return saveConfirmation;
    }

    static close() {
        const closeConfirmation: IConfirmMeta = {
            ...ConfirmationMetas.delete(),
            id: 'close',
            type: 'close',
            title: 'Closing Dialog',
            message: 'You will lose the form data!',
        };
        return closeConfirmation;
    }

    static back() {
        const closeConfirmation: IConfirmMeta = {
            ...ConfirmationMetas.delete(),
            id: 'back',
            type: 'back',
            title: 'Closing Dialog',
            message: 'You will lose the form data!',
        };
        return closeConfirmation;
    }

    static reset() {
        const closeConfirmation: IConfirmMeta = {
            ...ConfirmationMetas.delete(),
            id: 'reset',
            type: 'reset',
            title: 'Reseting Form',
            message: 'Would you like to reset the form?',
        };
        return closeConfirmation;
    }

    static open() {
        const closeConfirmation: IConfirmMeta = {
            ...ConfirmationMetas.delete(),
            id: 'open',
            type: 'open',
            title: 'Openning',
            message: 'Would you like to open it?',
        };
        return closeConfirmation;
    }
}
