import React, { useContext } from 'react';

// imports

// styles and images
import './dashboardContent.styles.scss';
import { AuthContext } from '../../context/Auth/AuthProvider';
import CardComponent from '../Card/card.component';

const DashboardContent: React.FC<any> = () => {
    const { user } = useContext(AuthContext);

  return (
    <div>
      <CardComponent title='Dashboard Summary' width={300}>
        <p>teste2</p>
        <p>teste3</p>

      </CardComponent>
    </div>
  )
}

export default DashboardContent;