import { createRoot } from 'react-dom/client';
// eslint-disable-next-line import/order
import App from './App';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/order
import { ContextProvider } from './context/store';
import { H } from 'highlight.run';
// import css
import 'antd/dist/antd.min.css';
import './overiseStyle/style.min.css';
import './assets/vendors/styles.css';
import { ErrorBoundary as ErrorBoundaryLibra } from '@highlight-run/react';
import ErrorBoundary from './features/Error/ErrorBoundary';

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
root.render(
  <ErrorBoundaryLibra showDialog>
    <BrowserRouter>
      <ContextProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ContextProvider>
    </BrowserRouter>
  </ErrorBoundaryLibra>
);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
