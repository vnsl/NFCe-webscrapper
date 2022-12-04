import React, { useState } from "react";
import FormComponent from "../../components/Form/form.component";
import Header from "../../components/Header/header.component";
import Tab from "../../components/Tabs/tab.component";
import Upload from "../../components/Upload/upload.component";
import { TabProps } from "../../models";
import { UserProps } from "../../models/user.model";
import DownloadService from "../../services/download.service";

// styles and images
import './dashboard.styles.scss';

const Dashboard: React.FC = () => {
    const [login, setLogin] = useState<boolean>(false);
    const [user, setUser] = useState<UserProps>()

    const createDB = (value: any) => {
        
        const newUser: UserProps = {
            userName: value.user.userName,
            country: value.user.country,
            email: value.user.email,
            createdDate: Date.now(),
            updatedDate: Date.now(),
        }

        DownloadService.exportToJson(newUser, newUser.userName)
        setUser(newUser);
        setLogin(true);
    }

    const formCreateDB = {
        name: 'user',
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
            {
                label: "Email",
                name: "email",
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