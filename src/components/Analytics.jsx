import React from 'react';
import Laptop from '../assests/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Laptop} alt="/" className='w-[500px] mx-auto my-4'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>
                    DATA ANALYTICS DASHBOARD
                </p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                    Manage Data Analytics Centrally
                </h1>
                <p className=''>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum ex quos nulla laboriosam officia nobis itaque, eligendi deserunt doloremque vitae minima quibusdam iure voluptatum, expedita quod nostrum saepe repellat.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics;