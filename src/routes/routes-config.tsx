import React, { ReactElement } from 'react';

import AssessmentIcon from '@mui/icons-material/Assessment';
import CategoryIcon from '@mui/icons-material/Category';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import GroupIcon from '@mui/icons-material/Group';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import HelpIcon from '@mui/icons-material/Help';
import LockIcon from '@mui/icons-material/Lock';
import PaymentsIcon from '@mui/icons-material/Payments';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { Navigate, RouteObject } from 'react-router-dom';

import AdminUsers from 'ui/admin-users/admin-users';
import Billing from 'ui/billing/billing';
import Categories from 'ui/categories/categories';
import Communications from 'ui/communications/communications';
import Customer from 'ui/customer/customer';
import Dashboard from 'ui/dashboard/dashboard';
import Documents from 'ui/documents/documents';
import ForgotPassword from 'ui/forgot-password/forgot-password';
import Help from 'ui/help/help';
import Merchant from 'ui/merchant/merchant';
import NotFound from 'ui/not-found/not-found';
import Payments from 'ui/payments/payments';
import Permissions from 'ui/permissions/permissions';
import Reports from 'ui/reports/reports';
import ServiceCategory from 'ui/service-category/service-category';
import Service from 'ui/service/service';
// import Racing from 'ui/racing/racing';
import Settings from 'ui/settings/settings';
import SignIn from 'ui/sign-in/sign-in';
import Transactions from 'ui/transactions/transactions';
import Translations from 'ui/translations/translations';

export type CustomRouteConfig = RouteObject & {
  permission?: Permission;
  isMenuItem: boolean;
  title: string;
  icon?: ReactElement;
};

export const routeConfig: CustomRouteConfig[] = [
  {
    path: '/',
    title: 'Dashboard',
    element: <Dashboard />,
    permission: ['edit'],
    isMenuItem: true,
    icon: <DashboardIcon />,
  },
  {
    path: '/admin-users',
    title: 'Admin Users',
    element: <AdminUsers />,
    permission: ['edit'],
    isMenuItem: true,
    icon: <GroupIcon />,
  },
  {
    path: '/permissions',
    title: 'Role/permission',
    element: <Permissions />,
    permission: ['edit'],
    isMenuItem: true,
    icon: <LockIcon />,
  },
  {
    path: '/customer',
    title: 'Customers',
    element: <Customer />,
    permission: ['edit'],
    isMenuItem: true,
    icon: <SupervisorAccountIcon />,
  },
  {
    path: '/merchants',
    title: 'Merchants',
    element: <Merchant />,
    permission: ['edit'],
    isMenuItem: true,
    icon: <StorefrontIcon />,
  },
  {
    path: '/service-category',
    title: 'Translations Category',
    element: <ServiceCategory />,
    permission: ['edit'],
    isMenuItem: true,
    icon: <DesignServicesIcon />,
  },
  {
    path: '/service',
    title: 'Service',
    element: <Service />,
    permission: ['edit'],
    isMenuItem: true,
    icon: <DryCleaningIcon />,
  },
  {
    path: '/categories',
    title: 'Categories',
    element: <Categories />,
    permission: ['edit'],
    isMenuItem: true,
    icon: <CategoryIcon />,
  },
  {
    path: '/transactions',
    title: 'Transactions',
    element: <Transactions />,
    permission: ['edit'],
    isMenuItem: true,
    icon: <ShoppingCartCheckoutIcon />,
  },
  {
    path: '/payments',
    title: 'Payments',
    element: <Payments />,
    permission: ['edit'],
    isMenuItem: true,
    icon: <PaymentsIcon />,
  },
  {
    path: '/billing',
    title: 'Billing',
    element: <Billing />,
    permission: ['edit'],
    isMenuItem: true,
    icon: <ReceiptIcon />,
  },
  {
    path: '/reports',
    title: 'Reports',
    element: <Reports />,
    permission: ['edit'],
    isMenuItem: true,
    icon: <AssessmentIcon />,
  },
  {
    path: '/documents',
    title: 'Documents',
    element: <Documents />,
    permission: ['edit'],
    isMenuItem: true,
    icon: <TextSnippetIcon />,
  },
  {
    path: '/communications',
    title: 'Communications',
    element: <Communications />,
    permission: ['edit'],
    isMenuItem: true,
    icon: <QuestionAnswerIcon />,
  },
  {
    path: '/translations',
    title: 'Translations',
    element: <Translations />,
    permission: ['edit'],
    isMenuItem: true,
    icon: <GTranslateIcon />,
  },
  {
    path: '/help',
    title: 'Help',
    element: <Help />,
    permission: ['edit'],
    isMenuItem: true,
    icon: <HelpIcon />,
  },
  {
    path: '/settings',
    title: 'Settings',
    element: <Settings />,
    permission: ['edit'],
    isMenuItem: true,
    icon: <SettingsIcon />,
  },
  {
    path: '*',
    title: 'Not Found',
    element: <NotFound />,
    isMenuItem: false,
  },
];

export const signInRouteConfig: Omit<CustomRouteConfig, 'isMenuItem'>[] = [
  {
    path: 'sign-in',
    title: 'Sign In',
    element: <SignIn />,
  },
  {
    path: 'forgot-password',
    title: 'Forgot Password',
    element: <ForgotPassword />,
  },
  {
    path: '*',
    title: 'Redirect',
    element: <Navigate to="/sign-in" replace />,
  },
];
