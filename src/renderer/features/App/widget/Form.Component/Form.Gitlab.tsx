import { Col, Row } from 'antd';
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
