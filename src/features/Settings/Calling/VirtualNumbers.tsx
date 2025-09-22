import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import PhoneNumberInput from '@/components/PhoneNumberInput'
import UploadProfile from '@/components/UploadProfile'
import React from 'react'

const VirtualNumbers = () => {

    const handleProfileImage = (file: File) => {
        // handle upload to server or state management
        console.log("Selected file:", file);
    };




    return (
        <section className="min-h-[calc(100vh-32vh)] max-h-[calc(100vh-32vh)] flex flex-col px-4 w-full overflow-y-auto">
            <div>
                
            </div>
        </section>
    )
}

export default VirtualNumbers
