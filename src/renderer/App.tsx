import { Spin } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import styled from 'styled-components';
import GlobalStyle from './config/global.style';
import { LOADING_COLOR } from './config/theme';
import { APP_LOADING } from './context/types';
import MainPage from './features/MainPage';
import useCallContext from './hooks/useCallContext';

const SpinLoadingStyled = styled(Spin)`
  &&& {
    top: 20%;
  }
`;

function App() {
  const { state, dispatch } = useCallContext();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  // loading when going to app
  React.useEffect(() => {
    setTimeout(() => {
      dispatch({ type: APP_LOADING, payload: false });
    }, 2000);
  }, []);

  React.useLayoutEffect(() => {
    navigate('/');
  }, []);

  return (
    <SpinLoadingStyled
      spinning={state.appLoading}
      indicator={<HashLoader color={LOADING_COLOR} loading size={60} />}
    >
      <MainPage />
      {/* define default style */}
      <GlobalStyle />
    </SpinLoadingStyled>
  );
}

export default App;
