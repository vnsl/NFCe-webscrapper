import React, { useContext, useState } from 'react';
// imports
import { AvatarProps, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

// styles and images
import './avatar.styles.scss';
import { AuthContext } from '../../context/Auth/AuthProvider';

const AvatarComponent: React.FC<AvatarProps> = () => {
    const { user } = useContext(AuthContext);

  return (
    <div>
        <Avatar icon={<UserOutlined />} >
            {user && user.userName}
        </Avatar>
        <Avatar >
            {user && user.userName}
        </Avatar>
    </div>
  )
}

export default AvatarComponent