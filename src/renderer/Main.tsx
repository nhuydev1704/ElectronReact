// eslint-disable-next-line import/order
import { ErrorBoundary as ErrorBoundaryLibra } from '@highlight-run/react';
import { HashRouter } from 'react-router-dom';
import App from './App';

// eslint-disable-next-line import/order
import { ContextProvider } from './context/store';
// import css
import 'antd/dist/antd.min.css';
import './assets/vendors/styles.css';
import ErrorBoundary from './features/Error/ErrorBoundary';
import './overiseStyle/style.min.css';

function Main() {
  return (
    <ErrorBoundaryLibra showDialog>
      <HashRouter>
        <ContextProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </ContextProvider>
      </HashRouter>
    </ErrorBoundaryLibra>
  );
}

export default Main;
