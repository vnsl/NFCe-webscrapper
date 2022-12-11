import React, { useContext } from 'react';

// imports
import { AuthContext } from '../../context/Auth/AuthProvider';
import DateService from '../../services/date.service';
import CardComponent from '../Card/card.component';
import UserSummary from '../CardsContent/UserSummaryCard/userSummary.component';

// styles and images
import './dashboardContent.styles.scss';

const DashboardContent: React.FC<any> = () => {
    const { user } = useContext(AuthContext);
    
  return (
    <div>
      <CardComponent title='Dashboard Summary' width={300}>
        <UserSummary user={user}></UserSummary>

      </CardComponent>
    </div>
  )
}

export default DashboardContent;