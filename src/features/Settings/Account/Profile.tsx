import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import PhoneNumberInput from '@/components/PhoneNumberInput'
import UploadProfile from '@/components/UploadProfile'
import React from 'react'

const Profile = () => {

    const handleProfileImage = (file: File) => {
        // handle upload to server or state management
        console.log("Selected file:", file);
    };




    return (
        <section className="min-h-[calc(100vh-32vh)] max-h-[calc(100vh-32vh)] flex flex-col px-4 w-full overflow-y-auto">

            <form className="flex flex-col flex-1 w-full">
                <div className="grid grid-cols-12 gap-4 mb-6 w-full">
                    <div className="col-span-3">
                        <UploadProfile onChange={handleProfileImage} />
                    </div>
                    <div className="col-span-9 flex justify-center items-center flex-col gap-4">
                        <Input label="First Name" placeholder='Enter First Name' />
                        <Input label="Last Name" placeholder='Enter Last Name' />
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <div className="col-span-6">
                        <Input label="Email" type='email' placeholder='Enter Email' />
                    </div>
                    <div className="col-span-6">
                        <PhoneNumberInput
                        // phoneNumber={field.value}
                        // country={countryCode}
                        // onPhoneChange={(val) => field.onChange(val)}
                        // onCountryChange={(val) => setCountryCode(val)}
                        />
                    </div>
                </div>


                <div className="mt-auto w-full ">
                    <Button label="Save" className="w-full sm:w-auto float-right" />
                </div>
            </form>
        </section>
    )
}

export default Profile
