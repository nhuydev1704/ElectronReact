import React from 'react';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
import Tour from 'reactour';
import { PrivateRoutes } from '@/config/routes';
import { tourConfig } from '@/config/tour';
import PageLayout from '@/layout';

// config routes
function MainPage() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log('🚀 ~ file: MainPage.tsx:12 ~ pathname:', pathname);
  const [isTourOpen, setIsTourOpen] = React.useState(false);

  const element = useRoutes(PrivateRoutes);

  // React.useEffect(() => {
  //     // nếu đăng nhập và domain không webview và domain không public
  //     // if (LocalStorage.getToken() && pathname.includes('webview') && pathname.includes('public')) {
  //     if (LocalStorage.getToken()) {
  //         navigate(routerPage.home);
  //     } else {
  //         switch (pathname) {
  //             case routerPage.register:
  //                 navigate(routerPage.register);
  //                 break;
  //             default:
  //                 navigate(routerPage.login);
  //                 break;
  //         }
  //     }
  // }, []);

  // React.useEffect(() => {
  //     // wait(3000).then(() => setIsTourOpen(true));
  // }, []);

  return (
    <>
      {element}
      <Tour
        onRequestClose={() => setIsTourOpen(false)}
        steps={tourConfig}
        isOpen={isTourOpen}
        className="helper"
        rounded={5}
        accentColor="red"

        // onAfterOpen={this.disableBody}
        // onBeforeClose={this.enableBody}
      />
    </>
  );
}

export default PageLayout(MainPage);
