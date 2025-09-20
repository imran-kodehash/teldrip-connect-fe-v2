import PageLoader from '@/components/loaders/PageLoader';
import { VerticalTabs } from '@/components/Tabs/VerticalTab';
import { Suspense, lazy } from 'react';

const Profile = lazy(() => import('./Profile'));
const Timezone = lazy(() => import('./Timezone'));
const BussinessHours = lazy(() => import('./BussinessHours'));
const Passwords = lazy(() => import('./Passwords'));
const Notifications = lazy(() => import('./Notifications'));
const PrivacyAndSecurity = lazy(() => import('./PrivacyAndSecurity'));

const Account = () => {
    return (
        <div className='p-6 bg-secondary-600 w-full rounded-lg'>
            <VerticalTabs
                tabs={[
                    {
                        label: "Profile",
                        value: "profile",
                        content: <Suspense fallback={<PageLoader />}><Profile /></Suspense>
                    },
                    {
                        label: "Timezone",
                        value: "timezone",
                        content: <Suspense fallback={<PageLoader />}><Timezone /></Suspense>
                    },
                    {
                        label: "Business Hours",
                        value: "bussinessHours",
                        content: <Suspense fallback={<PageLoader />}><BussinessHours /></Suspense>
                    },
                    {
                        label: "Passwords",
                        value: "passwords",
                        content: <Suspense fallback={<PageLoader />}><Passwords /></Suspense>
                    },
                    {
                        label: "Notifications",
                        value: "notifications",
                        content: <Suspense fallback={<PageLoader />}><Notifications /></Suspense>
                    },
                    {
                        label: "Privacy & Security",
                        value: "privacyAndSecurity",
                        content: <Suspense fallback={<PageLoader />}><PrivacyAndSecurity /></Suspense>
                    },
                ]}
            />
        </div>
    );
};

export default Account;
