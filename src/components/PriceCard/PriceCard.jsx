import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 p-4 rounded-md flex flex-col'>
            {/* PriceCard er child div eta  rparant div PriceList er modde */}
            <h2 className='text-center'>
               <span className='text-purple-700 text-5xl font-extrabold'>{price.prices}</span>
               <span className='text-2xl text-purple-500 text-white text-bold'>/month</span>

            </h2>

           <h5 className='text-center my-6 text-2xl font-bold'> {price.name}</h5>
           <p className='text-white font-bold underline'>Features:</p>
           {
            price.features.map((feature,idx)=> <Feature 
            key={idx}
            feature={feature}>
                
            </Feature>)
           }
           <button className='w-full mt-auto py-2 bg-green-500 rounded-md text-white font-bold hover:bg-green-700'>Buy Now</button>
        </div>
    );
};

export default PriceCard;