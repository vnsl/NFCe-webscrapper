import React, { useContext, useState } from "react";
import DashboardContent from "../../components/DashboardContent/dashboardContent.component";
import FormComponent from "../../components/Form/form.component";
import Header from "../../components/Header/header.component";
import Tab from "../../components/Tabs/tab.component";
import UploadComponent from "../../components/Upload/upload.component";
import { AuthContext } from "../../context/Auth/AuthProvider";
import { TabProps } from "../../models";
import { UploadContentProps } from "../../models/upload.model";
import { UserProps } from "../../models/user.model";
import DownloadService from "../../services/download.service";

// styles and images
import './dashboard.styles.scss';

const Dashboard: React.FC = () => {

    const { signIn, user } = useContext(AuthContext);

    const createDB = (value: any) => {
        const newUser: UserProps = {
            userName: value.user.userName,
            country: value.user.country,
            email: value.user.email,
            createdDate: Date.now(),
            updatedDate: Date.now(),
            nfceData: []
        }

        DownloadService.exportToJson(newUser, newUser.userName)
        signIn(newUser);
    };

    const login = (user: UserProps) => {
        signIn(user);
    };

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

    const uploadDB: UploadContentProps = {
        name: 'uploadDB',
        multiple: false,
        acceptType: 'application/json',
        submitButton: 'Login',
        onSubmit: login
    }

    const tabContent: TabProps[] = [
        {
            name: 'Create your DataBase', 
            content: <FormComponent formContent={formCreateDB} handleSubmit={createDB}/>
        },
        {
            name: 'Upload your DataBase', 
            content: <UploadComponent name={uploadDB.name} multiple={uploadDB.multiple} acceptType={uploadDB.acceptType} submitButton={uploadDB.submitButton} onSubmit={uploadDB.onSubmit}/>
        }
    ]

    return (
        <div className="dashboard-main">
            <Header></Header>
            <div className="dashboard-content">
                {user.userName === 'Guest' && <Tab tabs={tabContent}></Tab>}
                {user.userName !== 'Guest' && <DashboardContent></DashboardContent>}
            </div>
        </div>
    )
}

export default Dashboard;