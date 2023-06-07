import { Collapse } from 'antd';
import FormTool from '../components/FormTool';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function ToolPage() {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse defaultActiveKey={['1', '2', '3']} onChange={onChange}>
      <Panel header="Tool Tạo Form" key="1">
        <div>
          <FormTool />
        </div>
      </Panel>
      <Panel header="Tool Tạo Table" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="Other Tool" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
}

export default ToolPage;
