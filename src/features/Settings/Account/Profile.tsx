import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import React from 'react'

const Profile = () => {
    return (
        <section className="min-h-screen flex flex-col px-4 w-full">
            <h2 className="text-secondary-800 text-base font-semibold mb-5">Profile</h2>

            <form className="flex flex-col flex-1 w-full">
                <div className="grid grid-cols-12 gap-4 mb-6 w-full">
                    <div className="col-span-6">
                        <Input label="First Name" />
                    </div>
                    <div className="col-span-6">
                        <Input label="Last Name" />
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4 mb-6">
                    <div className="col-span-6">
                        <Input label="Email" />
                    </div>
                    <div className="col-span-6">
                        <Input label="Phone" />
                    </div>
                </div>

                <div className="mt-auto">
                    <Button label="Save" className="w-full sm:w-auto" />
                </div>
            </form>
        </section>
    )
}

export default Profile
