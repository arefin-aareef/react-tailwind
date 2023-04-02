import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-purple-300 mt-4 rounded-md p-8 flex flex-col'>
            <h2 className='text-center mb-4'>
                <span className='text-5xl font-bold text-purple-600'>${price.price}</span>
                <span>/month</span>
            </h2>
            <h5 className='text-2xl font-bold text-center'>{price.name}</h5>
            <p className='underline font-bold my-2'>Features: </p>
            {
                price.features.map((feature, idx) => <Feature
                key={idx}
                feature={feature}
                ></Feature>)
            }
            <button className='w-full bg-purple-800 text-white p-2 rounded mt-auto hover:bg-purple-600 hover:text-black'>Register Now</button>
        </div>
    );
};

export default PriceCard;