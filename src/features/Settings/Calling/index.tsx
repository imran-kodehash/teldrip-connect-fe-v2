import PageLoader from '@/components/loaders/PageLoader';
import { VerticalTabs } from '@/components/Tabs/VerticalTab';
import { Suspense, lazy } from 'react';

const VirtualNumbers = lazy(() => import('./VirtualNumbers'));
const CallSettings = lazy(() => import('./CallSettings'));
const CallDisposition = lazy(() => import('./CallDisposition'));


const Calling = () => {
    return (
        <div className='p-5 bg-secondary-600  rounded-lg w-full'>
            <VerticalTabs
                tabs={[
                    {
                        label: "Virtual Numbers",
                        value: "virtualNumbers",
                        content: <Suspense fallback={<PageLoader />}><VirtualNumbers /></Suspense>
                    },

                    {
                        label: "Call Settings",
                        value: "callSettings",
                        content: <Suspense fallback={<PageLoader />}><CallSettings /></Suspense>
                    },

                    {
                        label: "Call Disposition",
                        value: "callDisposition",
                        content: <Suspense fallback={<PageLoader />}><CallDisposition /></Suspense>
                    },

                ]}
            />
        </div>
    );
};

export default Calling;
