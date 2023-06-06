import { Card, Checkbox, Col, Input, Radio, Row } from 'antd';
import React from 'react';
import FormGitlab from '../Form.Component/Form.Gitlab';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import dracula from 'prism-react-renderer/themes/dracula';

const FormPage = () => {
    const [type, setType] = React.useState<'horizontal' | 'vertical'>('horizontal');
    const [showTitle, setShowTitle] = React.useState(true);

    return (
        <div>
            <Card title="FormGitlab">
                <Row className="gx-mb-2" align="middle">
                    <Radio.Group onChange={(e) => setType(e.target.value)}>
                        <Radio.Button value="horizontal">Horizontal</Radio.Button>
                        <Radio.Button value="vertical">Vertical</Radio.Button>
                    </Radio.Group>

                    <Checkbox
                        checked={showTitle}
                        onChange={(e) => setShowTitle(e.target.checked)}
                        style={{ marginLeft: '20px' }}
                    >
                        Title group
                    </Checkbox>
                </Row>
                <Card>
                    <div style={{ paddingBottom: '20px', fontWeight: 'bold' }}>Input template</div>
                    <div style={{ border: '1px solid #eee', padding: '20px', marginBottom: '10px' }}>
                        <FormGitlab
                            showTitle={showTitle}
                            title="Account"
                            label="Name"
                            layoutType={type}
                            inputField={<Input />}
                            descriptionInput="* required"
                        />
                    </div>

                    <Row>
                        <Col span={12}>
                            <h4>Components</h4>
                            <LiveProvider
                                noInline={false}
                                theme={dracula}
                                code="import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';

interface IProps {
    title?: string; // title of form group
    showTitle?: boolean; // isShow title form group

    label: string; // label form
    inputField: React.ReactNode; // input field
    colSpan?: number; // span of label
    inputSpan?: number; // span of input field
    descriptionInput?: string; // description of input field
    layoutType?: 'horizontal' | 'vertical';
}

const FormGitlab = ({
    title,
    showTitle = true,
    label,
    inputField,
    colSpan = 6,
    inputSpan = 18,
    descriptionInput,
    layoutType = 'horizontal',
}: IProps) => {
    return (
        <RowFormContainerStyled>
            {showTitle && <TitleStyled>{title}</TitleStyled>}
            {layoutType === 'horizontal' ? (
                <RowFormStyled>
                    <ColLabelStyled span={colSpan}>{label}</ColLabelStyled>
                    <Col span={inputSpan}>
                        <div>{inputField}</div>
                        {descriptionInput && <DescriptionInputStyled>{descriptionInput}</DescriptionInputStyled>}
                    </Col>
                </RowFormStyled>
            ) : (
                <RowFormVerticalStyled>
                    <ColLabelVerticalStyled span={24}>{label}</ColLabelVerticalStyled>
                    <Col span={24}>
                        <div>{inputField}</div>
                        {descriptionInput && <DescriptionInputStyled>{descriptionInput}</DescriptionInputStyled>}
                    </Col>
                </RowFormVerticalStyled>
            )}
        </RowFormContainerStyled>
    );
};

const RowFormContainerStyled = styled.div``;

const TitleStyled = styled.div`
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
    padding-bottom: 4px;
`;

const RowFormStyled = styled(Row)`
    margin-bottom: 10px;
`;

const RowFormVerticalStyled = styled(Row)`
    margin-bottom: 10px;
`;

const ColLabelStyled = styled(Col)`
    display: flex;
    justify-content: end;
    color: black;
    padding: 10px 10px 0;
`;

const ColLabelVerticalStyled = styled(Col)`
    padding-bottom: 8px;
`;

const DescriptionInputStyled = styled.div`
    font-size: 1.4rem;
    margin-bottom: 0;
    margin-top: 4px;
    color: #5e5e5e;
`;

export default FormGitlab;
"
                            >
                                <LiveEditor />
                            </LiveProvider>
                        </Col>
                        <Col span={12}>
                            <h4>Used</h4>

                            <LiveProvider
                                noInline={false}
                                theme={dracula}
                                code={`<FormGitlab
                        showTitle={showTitle}
                        title="Account"
                        label="Name"
                        layoutType={type}
                        inputField={<Input />}
                        descriptionInput="* required"
                    />`}
                            >
                                <LiveEditor />
                            </LiveProvider>
                        </Col>
                    </Row>
                </Card>
            </Card>
        </div>
    );
};

export default FormPage;
