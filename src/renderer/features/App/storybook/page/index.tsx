import React from 'react';

const StoryBookPage = () => {
    return (
        <div
            data-tut="reactour__user_storybook"
            style={{ height: '100%', maxHeight: '100%', minHeight: '100%', overflow: 'hidden' }}
        >
            <iframe src="http://localhost:6006/?path=/story/example-introduction--page" width="100%" height="100%" />
        </div>
    );
};

export default StoryBookPage;
