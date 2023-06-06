import React from 'react';
import { Card } from 'antd';

const Widget = ({ title, children, styleName, cover, extra, actions, style, headStyle }: any) => {
    return (
        <Card
            title={<strong>{title}</strong>}
            actions={actions}
            cover={cover}
            className={`gx-card-widget ${styleName}`}
            extra={extra}
            headStyle={headStyle ? { display: 'none' } : { display: 'block' }}
            {...style}
        >
            {children}
        </Card>
    );
};

export default Widget;
