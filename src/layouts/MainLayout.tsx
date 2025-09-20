import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export default function MainLayout() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="size-full min-h-screen w-full overflow-hidden relative">
                <Header />
                <main className="overflow-y-auto h-[calc(100vh-10vh)] bg-secondary-200 px-3 py-3 relative w-full">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
