import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import treatment from '../../../assets/images/treatment.png'

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride joins the tooth structure when your teeth develop, thus strengthening the teeth enamel, making them less susceptible to bacteria and cavities',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'For your long time cavity filling',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Make your smile more beautiful',
            img: whitening
        }
    ]

    return (
        <div className='mt-16 flex-1'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className="hero mt-16 flex-1">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">At our dental practice, we believe in providing exceptional dental care on your terms. Our team of skilled dentists and friendly staff are dedicated to creating a comfortable and personalized experience for each patient. From routine cleanings to advanced procedures, we are here to help you achieve optimal oral health.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;