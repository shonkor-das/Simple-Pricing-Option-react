import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const {features} = option;
    return (
        <div className='bg-indigo-300 m-5 p-5'>
            <div>
                <h3><span className='text-6xl text-white font-bold'>{option.price}</span>
                    <span className='text-2xl text-gray-200'>/mon</span>
                </h3>
                <p className='text-3xl my-3'>{option.name}</p>
            </div>
            {
                features.map((feature, idx) => <Feature
                key = {feature.idx}
                feature = {feature}
                ></Feature>)
            }
            <button className='bg-green-500 w-full mt-4 rounded-md py-2 text-white font-bold'>By Now</button>
        </div>
    );
};

export default PriceOption;