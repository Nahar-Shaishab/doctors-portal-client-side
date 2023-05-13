import React from 'react';
import chair from '../../../assets/images/chair.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import bg from '../../../assets/images/bg.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div 
        style={{
            background: `url(${bg})`,
            backgroundSize: 'container'
        }}
        className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Healthy & Beautiful Smile</h1>
                    <p className="py-6">Welcome to our dentist appointment page! We look forward to helping you achieve a healthy and beautiful smile. Book your appointment now.</p>
                    <PrimaryButton><Link to='/login'>Getting Started</Link></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;