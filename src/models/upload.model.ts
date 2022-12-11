export interface UploadContentProps {
    name: string;
    multiple: boolean;
    acceptType: string;
    submitButton: string;
    onSubmit: (value: any) => void;
    cancelButton?: string;
    onCancel?: () => void;
}
