import React, { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import PageLoader from './components/loaders/PageLoader';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import ProtectedRoute from '@/components/ProtectedRoute';
// import MainLayout from '@/layouts/MainLayout';

const Login = lazy(() => import('@/pages/Auth/Login'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
// const Users = lazy(() => import('@/pages/Dashboard/Users'));
// const Contacts = lazy(() => import('@/pages/Dashboard/Contacts'));
const Settings = lazy(() => import('@/pages/Settings'));
// const NotFound = lazy(() => import('@/pages/NotFound'));

// Numbers module
// const NumbersLayout = lazy(() => import('@/pages/Dashboard/Numbers/NumbersLayout'));
// const AddNumber = lazy(() => import('@/pages/Dashboard/Numbers/AddNumber'));
// const NumberDetails = lazy(() => import('@/pages/Dashboard/Numbers/NumberDetails'));
// const NumbersSettings = lazy(() => import('@/pages/Dashboard/Numbers/NumbersSettings'));

const Loadable = (Component: React.LazyExoticComponent<() => any>) => (
    <Suspense fallback={<PageLoader />}>
        <Component />
    </Suspense>
);
//whjewej

export const routes: RouteObject[] = [
    {
        path: '/sign-in',
        element: Loadable(Login), // public route
    },

    {
        path: '/',
        element: (
            // <ProtectedRoute>
            <MainLayout />
            // </ProtectedRoute>
        ), // protected layout
        children: [
            { path: '/', element: Loadable(Dashboard) },
            { path: 'dashboard', element: Loadable(Dashboard) },
            // { path: 'users', element: Loadable(Users) },
            // {       
            //     path: 'numbers',
            //     element: <ProtectedRoute><Loadable(NumbersLayout) /></ProtectedRoute>,
            //     children: [
            //         { path: '', element: <div>Select a number</div> }, // default
            //         { path: 'add', element: <Loadable(AddNumber) /> },
            //         { path: ':id', element: <Loadable(NumberDetails) /> },
            //         { path: 'settings', element: <Loadable(NumbersSettings) /> },
            //     ],
            // },
            // { path: 'contacts', element: Loadable(Contacts) },
            { path: 'settings', element: Loadable(Settings) },
        ],
    },
    // { path: '*', element: Loadable(NotFound) },
];
