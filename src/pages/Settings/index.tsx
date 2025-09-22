import { HorizontalTabs } from '@/components/Tabs/HorizontalTab'
import Account from '@/features/Settings/Account'
import Calling from '@/features/Settings/Calling'

const Settings = () => {
    return (
        <div className='p-5 bg-white-100 flex flex-col justify-start items-start w-full rounded-lg'>
            <HorizontalTabs initialTab="account"
                tabs={[
                    {
                        label: "Account",
                        value: "account",
                        content: <Account />
                    },
                    {
                        label: "Calling",
                        value: "calling",
                        content: <Calling />
                    },
                    {
                        label: "Messaging",
                        value: "messaging",
                        content: <div>Settings Content</div>,
                    },
                    {
                        label: "Integration",
                        value: "integration",
                        content: <div>Invoice Content</div>,
                    },
                    {
                        label: "Templates",
                        value: "templates",
                        content: <div>Invoice Content</div>,
                    },
                    {
                        label: "Voicemail",
                        value: "voicemail",
                        content: <div>Invoice Content</div>,
                    },
                ]} />
        </div>
    )
}

export default Settings