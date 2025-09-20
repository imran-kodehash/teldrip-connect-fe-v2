import React from 'react'
import { Image } from '../Image'
import LoaderGif from '@/assets/gif/loader.gif';

const PageLoader = () => {
    return (
        <div className='flex justify-center items-center h-screen w-full'>
            <div className='w-20 h-20'>
                <Image src={LoaderGif} alt="Page is Loading..." width={10} height={10} />
            </div>
        </div>
    )
}

export default PageLoader