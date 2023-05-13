import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section className='mt-32'
        style={{
           background: `url(${appointment})` 
        }}>

            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className="-mt-32 md:block lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h4 className='lg text-primary font-bold'>Appointment</h4>
                        <h1 className="text-white text-4xl font-bold">Make An Appointment Today</h1>
                        <p className="text-white py-6">During your appointment, our skilled dentists will provide a comprehensive dental exam, clean your teeth, and address any concerns you may have. We strive to make your visit comfortable and personalized to your unique needs.</p>
                        <PrimaryButton><Link to='/appointment'>Appointment</Link></PrimaryButton>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default MakeAppointment;