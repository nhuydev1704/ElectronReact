import { Col, Form } from 'antd';
import React, { ReactNode } from 'react';

function FormItemComponent({
  grid,
  label,
  name,
  rules,
  valuePropName,
  inputField,
  style,
  extra,
  normalize,
  children,
  ...props
}: {
  validateStatus?: any;
  grid?: boolean;
  label: any;
  messageVariables?: any;
  name?: any;
  rules?: any;
  valuePropName?: any;
  inputField: ReactNode;
  extra?: any;
  style?: any;
  normalize?: any;
  props?: { dependencies: any };
  children?: any;
}) {
  return (
    <Col span={grid ? 12 : 24}>
      <Form.Item
        // style={{ marginBottom: '14px' }}
        style={{ marginBottom: '10px', ...style }}
        extra={extra}
        colon={false}
        label={label}
        name={name}
        rules={rules}
        valuePropName={valuePropName}
        normalize={normalize}
        {...props}
      >
        {inputField || children}
      </Form.Item>
    </Col>
  );
}

export default React.memo(FormItemComponent);
