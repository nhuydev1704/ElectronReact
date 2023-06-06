import { createRoot } from 'react-dom/client';
// eslint-disable-next-line import/order

// eslint-disable-next-line import/order
import { H } from 'highlight.run';
// import css
import 'antd/dist/antd.min.css';
import Main from './Main';
import './assets/vendors/styles.css';
import './overiseStyle/style.min.css';

H.init('jdk0mve5');
H.init('jdk0mve5', {
  environment: 'production',
  enableStrictPrivacy: false,
});
H.identify('khanhandli@gmail.com', {
  id: '8909b017-c0d9-4cc2-90ae-fb519c9e028a',
  phone: '867-5309',
});
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<Main />);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
