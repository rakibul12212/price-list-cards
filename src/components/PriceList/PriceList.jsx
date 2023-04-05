import React from 'react';
import { useEffect,useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    
    const [prices,setPrices] =useState([])
    useEffect(() =>{
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    },[])
    return (
        <div className='mx-20'>
            <h2 className='text-5xl text-center text-purple-950 bg-purple-300 font-bold p-4'> Awesome Affordable Prices</h2>
            <div className='grid md:grid-cols-3 gap-3'>
                {/* priceCard er parent div eta */}
            {
                prices.map(price=><PriceCard
                key={price.id}
                price={price}></PriceCard>)
            }
            </div>
        </div>
    );
};

export default PriceList;
