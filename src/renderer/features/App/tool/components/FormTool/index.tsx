import FormComponent from '@/components/FormComponent';
import FormItemComponent from '@/components/FormComponent/FormItemComponent';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Divider, Form, Input, Row, Space } from 'antd';
import React from 'react';
function FormTool() {
  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };
  return (
    <FormComponent layoutType="vertical" onSubmit={onFinish}>
      <Form.List name="formItems">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <React.Fragment key={key}>
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                  }}
                >
                  <MinusCircleOutlined onClick={() => remove(name)} />
                  <Row style={{ width: '100%', flexDirection: 'row' }}>
                    <Col span={16}>
                      <FormItemComponent
                        label="Tên trường"
                        inputField={undefined}
                        name={[name, 'name']}
                        rules={[
                          { required: true, message: 'Nhập trên trường' },
                        ]}
                        {...restField}
                      >
                        <Input placeholder="Nhập tên trường" />
                      </FormItemComponent>
                      <FormItemComponent
                        label="Label"
                        inputField={undefined}
                        name={[name, 'label']}
                        rules={[{ required: true, message: 'Nhập label' }]}
                        {...restField}
                      >
                        <Input placeholder="Label" />
                      </FormItemComponent>
                    </Col>
                    <Col span={8}>
                      <FormItemComponent
                        {...restField}
                        label="Rules"
                        inputField={undefined}
                        name={[name, 'rules']}
                      >
                        <Checkbox.Group style={{ width: '100%' }}>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                value="A"
                                style={{ lineHeight: '32px' }}
                              >
                                Bắt buộc
                              </Checkbox>
                            </Col>
                            <Col span={24}>
                              <Checkbox
                                value="C"
                                style={{ lineHeight: '32px' }}
                              >
                                Email
                              </Checkbox>
                            </Col>
                            <Col span={24}>
                              <Checkbox
                                value="D"
                                style={{ lineHeight: '32px' }}
                              >
                                Số điện thoại
                              </Checkbox>
                            </Col>
                          </Row>
                        </Checkbox.Group>
                      </FormItemComponent>
                    </Col>
                  </Row>
                </div>
                <Divider />
              </React.Fragment>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </FormComponent>
  );
}

export default FormTool;
