import { SearchableDropdown } from '@/components/SearchableDropdown'
import { countryCodes } from '@/data/countries';
import LocationImage from '@/assets/images/location.png'
import React from 'react'
import { Image } from '@/components/Image';
import RadioButton from '@/components/RadioButton';
import { Button } from '@/components/Button';


const options = [
    { id: 1, label: "Apple" },
    { id: 2, label: "Banana" },
    { id: 3, label: "Orange" },
    { id: 4, label: "Mango" },
];

const Numbers = () => {
    const [selected, setSelected] = React.useState<{ id: number; label: string } | null>(null);
    return (

        <div className='p-5 bg-white-100 flex flex-col justify-center items-center gap-5  w-full rounded-lg h-[calc(100vh-14vh)]'>
            <div className='w-1/2 flex flex-col justify-center items-center gap-5'>
                <Image alt='Numbers' src={LocationImage} width={100} height={100} />
                <SearchableDropdown
                    options={countryCodes.map(c => ({ id: c.code, label: c.country }))}
                    value={selected}
                    onChange={setSelected}
                    placeholder="Select Location"
                />
                <div className='flex gap-5 justify-center items-center'>
                    <RadioButton label='Local Numbers' name='numberType' value='local' />
                    <RadioButton label='Toll-Free Numbers' name='numberType' value='toll-free' />
                </div>
                <Button label='Generate' />
            </div>
        </div>
    )
}

export default Numbers