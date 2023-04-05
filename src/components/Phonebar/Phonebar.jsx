import React from 'react';
import react,{useState} from 'react'
import { useEffect } from 'react';
import axios  from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Phonebar = () => {
const[phones,setPhones] =useState([]);

useEffect(()=>{
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res=>res.jspn())
    // .then(data=> setPhones(data))
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data=>{
const loadData=data.data.data;
console.log(loadData)
const phoneData=loadData.map(phone=>{
    const parts=phone.slug.split('-')
    const price=parseInt(parts[1]);
    const phoneInfo={
        name:phone.phone_name,
        price:price
    }
    return phoneInfo;
})
console.log(phoneData);
setPhones(phoneData)
    })
},[])
    return (
        <div className='p-20'>
            <BarChart  width={1000}
            height={500}
            data={phones}>
            <Bar dataKey="price" fill="#8884d8" />
              <XAxis dataKey={'name'}></XAxis> 
              <YAxis></YAxis> 
              <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phonebar;

