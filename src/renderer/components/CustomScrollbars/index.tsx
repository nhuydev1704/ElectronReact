import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

const CustomScrollbars = (props: any) => {
    return (
        <Scrollbars
            autoHide
            universal
            renderTrackHorizontal={(props: any) => <div {...props} className="track-horizontal" />}
            {...props}
            />
    );
};

export default React.memo(CustomScrollbars);
