import LoginPage from '@/features/Auth/Login/pages';
import HomePage from '@/features/App/home/page';
import CustomerPage from '@/features/App/customer/pages';
import NotFoundPage from '@/features/Notfound';
import RegisterPage from '@/features/Auth/Register';
import StoryBookPage from '@/features/App/storybook/page';
import WidgetPage from '@/features/App/widget/page';
import IntroductionPage from '@/features/App/introduction/page';
import TimeLinePage from '@/features/App/widget/page/timeline';
import PricingPage from '@/features/App/widget/page/pricing';
import FormPage from '@/features/App/widget/page/form';
import DocumentPage from '@/features/App/document/page';
import ToolPage from '@/features/App/tool/pages';

// định nghĩa router
export const routerPage = {
  // public....

  // private....
  home: '/',
  homeMain: '/index.html',
  coding: '/coding',
  tool: '/tool',
  widget: '/dashboard/widget',
  timeline: '/dashboard/timeline',
  pricing: '/dashboard/pricing',
  form: '/dashboard/form',
  customer: '/customer',
  storybook: '/storybook',
  document: '/document',
  // auth....
  login: '/auth/login',
  register: '/auth/register',
};

// public chứa những router không cần đăng nhập hoặc web view
const PublicRoutes = [{ path: '*', element: <NotFoundPage /> }];

// private router khi đã đăng nhập
const PrivateRoutes = [
  {
    path: routerPage.homeMain,
    element: <IntroductionPage />,
  },
  {
    path: routerPage.home,
    element: <IntroductionPage />,
  },
  {
    path: routerPage.coding,
    element: <HomePage />,
  },
  {
    path: routerPage.widget,
    element: <WidgetPage />,
  },
  {
    path: routerPage.timeline,
    element: <TimeLinePage />,
  },
  {
    path: routerPage.pricing,
    element: <PricingPage />,
  },
  {
    path: routerPage.form,
    element: <FormPage />,
  },
  {
    path: routerPage.storybook,
    element: <StoryBookPage />,
  },
  {
    path: routerPage.storybook,
    element: <StoryBookPage />,
  },
  {
    path: routerPage.document,
    element: <DocumentPage />,
  },
  {
    path: routerPage.tool,
    element: <ToolPage />,
  },
  ...PublicRoutes,
];

// auth router khi chưa đăng nhập
const AuthRoutes = [
  {
    path: routerPage.login,
    element: <LoginPage />,
  },
  {
    path: routerPage.register,
    element: <RegisterPage />,
  },
  ...PublicRoutes,
];

export { PrivateRoutes, AuthRoutes };
