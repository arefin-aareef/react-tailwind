import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex items-center mb-3'>
            <CheckCircleIcon className="h-6 w-6 text-purple-900" />
            <span className='ml-2 my-1'>{feature}</span>
        </div>
    );
};

export default Feature;