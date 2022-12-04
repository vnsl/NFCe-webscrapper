import React from "react";
import { Form, Input, Button } from 'antd';

// styles and images
import './form.styles.scss';
import { FormProps } from "../../models/form.model";
import { fileURLToPath } from "url";

const FormComponent: React.FC<FormProps> = ({formContent, handleSubmit}) => {
    const onFinish = (values: any) => {
        handleSubmit(values)
    } 

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };


    return (
        <Form  labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
            <Form.List
            name={formContent.name}   
            >
                {() => (
                    <>
                        {formContent.fields.map((field, index) => {
                            if(field.type === "input") {
                                return <Form.Item
                                        key={index}
                                        label={field.label}
                                        name={field.name}
                                        rules={[
                                            {
                                                required: field.rule?.required,
                                                message: field.rule?.message
                                            }
                                        ]}
                                        >
                                            <Input></Input>
                                        </Form.Item>
                                
                            }
                        })}
                    </>
                )}
            </Form.List>
            <Form.Item wrapperCol={{ offset: 13, span: 16 }}> 
                <Button htmlType="submit">
                    Submit
                </Button>
            </Form.Item>   
        </Form>
    )
}

export default FormComponent;