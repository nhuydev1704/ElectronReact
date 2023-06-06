import { LOADING_COLOR } from '@/config/theme';
import useCallContext from '@/hooks/useCallContext';
import { wait } from '@/utils';
import { Spin } from 'antd';
import React from 'react';
import { ClockLoader } from 'react-spinners';

const code = `<h1>hihih</h1>`.trim();

const HomePage = () => {
    const { state } = useCallContext();

    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if (state.appLoading) return;
        setLoading(true);
        wait(1000).then(() => setLoading(false));
    }, [state.appLoading]);

    return (
        <Spin
            style={{ height: '100vh', top: '28%' }}
            indicator={<ClockLoader color={LOADING_COLOR} />}
            spinning={loading}
        >
            <div style={{ height: '98.5vh' }} data-tut="reactour__body__frontend">
                {/* <LiveProvider scope={{ Widget }} code={code}>
                <div className="gx-p-4">
                    <Row>
                        <Col span={12}>
                            <Widget title="Code fast test">
                                <LiveEditor theme={dracula} />
                                <LiveError />
                            </Widget>
                        </Col>
                        <Col span={12}>
                            <Widget title="Preview code của bạn 👇">
                                <div className="gx-border gx-p-4 gx-rounded-lg">
                                    <LivePreview />
                                </div>
                            </Widget>
                        </Col>
                    </Row>
                </div>
            </LiveProvider> */}
                <iframe width="100%" height="100%" src="https://stackblitz.com/edit/react-ts-feu4hk?file=App.tsx" />
            </div>
        </Spin>
    );
};

export default HomePage;
