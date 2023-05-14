import { format } from 'date-fns';
import React, {  useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';

const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const {data:AppointmentOptions=[], refetch} = useQuery({
        queryKey: ['AppointmentOptions',date],
        queryFn: () => fetch(`https://doctors-portal-server-side-peach.vercel.app/AppointmentOptions?date=${date}`)
        .then(res => res.json())
    });


  
    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>
                Available Appointments {format(selectedDate, 'PP')}</p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    AppointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        AppointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }

        </section>
    );
};

export default AvailableAppointments;