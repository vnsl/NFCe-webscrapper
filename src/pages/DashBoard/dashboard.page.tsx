import { timeStamp } from "console";
import React, { useState } from "react";
import FormComponent from "../../components/Form/form.component";
import Header from "../../components/Header/header.component";
import Tab from "../../components/Tabs/tab.component";
import Upload from "../../components/Upload/upload.component";
import { TabProps } from "../../models";
import { UserProps } from "../../models/user.model";

// styles and images
import './dashboard.styles.scss';

const Dashboard: React.FC = () => {
    const [login, setLogin] = useState<boolean>(false);
    const [user, setUser] = useState<UserProps>()

    const createDB = (user: UserProps) => {
        console.log(user);
        user.createdDate = Date.now();
        user.updatedDate = Date.now();
        setUser(user);
        setLogin(true);
    }

    const formCreateDB = {
        name: 'Create DB',
        fields: [
            {
                label: "Username",
                name: "userName",
                type: "input",
                rule: {required: true, message: 'Please input your username!'}
            },
            {
                label: "Country",
                name: "country",
                type: "input",
                rule: {required: true, message: 'Please input your country!'}
            },
        ]
    }


    const tabContent: TabProps[] = [
        {
            name: 'Create your DataBase', 
            content: <FormComponent formContent={formCreateDB} handleSubmit={createDB}/>
        },
        {
            name: 'Upload your DataBase', 
            content: <Upload/>
        }
    ]

    return (
        <div className="dashboard-main">
            <Header></Header>
            <div className="dashboard-content">
                {!login && <Tab tabs={tabContent}></Tab>}
                {login && <h1>{user?.userName}</h1>}
            </div>
        </div>
    )
}

export default Dashboard;