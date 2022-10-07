import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOption = [
        {
            id: 1, name: 'Free', price: 0.00, features: [
                'Everthing on Free',
                'Extra Feature',
                'Unnecessary Feature',
                'Will never use Feature',
                'Hudai Feature',
                'Ajaita Feature'
            ]
        },
        {
            id: 2, name: 'Medium', price: 9.90, features: [
                'Evrything on Medium',
                'Extra Feature',
                'Unnecessary Feature',
                'Will never use Feature',
                'Hudai Feature',
                'Ajaita Feature'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.90,features:[
                'Evryting on Premuin',
                'Extra Feature',
                'Unnecessary Feature',
                'Will never use Feature',
                'Hudai Feature',
                'Ajaita Feature'
            ]
        },
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold mt-4 bg-indigo-300 py-10 text-white'>Best Course Offer</h2>
            <div className='grid md:grid-cols-3 gap-3 mt-2'>
                {
                    pricingOption.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;