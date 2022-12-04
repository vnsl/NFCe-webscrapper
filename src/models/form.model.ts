import { FunctionDeclaration } from "typescript";
import { UserProps } from "./user.model";

export interface FormProps {
    formContent: {
        name: string;
        fields: field[];
    };
    handleSubmit: (user: UserProps) => void;
}
  
export type InputFieldProps = {
    label: string; 
    name: string;
    rules?: rule;
}

export type CheckFieldProps = {
    valuePropName: string; 
    name: string; 
    rules?: rule;
}

type field = {
    label: string;
    name: string;
    type: string;
    rule?: rule;
}

type rule = {
    required: boolean;
    message?: string;
}