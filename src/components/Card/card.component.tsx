import React from 'react';
import { Card } from 'antd';

// styles and images
import './card.styles.scss';
import { CardProps } from '../../models/card.model';

const CardComponent: React.FC<CardProps> = ({title, width, children}) => (
  <>
    <Card title={title} extra={<a href="#">More</a>} style={{ width: width }}>
      <>
        {children}
      </>
    </Card>
  </>
);

export default CardComponent;