import React from 'react';

const AppointmentOption = ({ AppointmentOption , setTreatment}) => {
    const { name, slots } = AppointmentOption;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary text-bold text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0]: "Try Another Day"}</p>
                <p>{slots.length}{slots.length > 1 ? ' spaces' : ' space'} available</p>
                <div className="card-actions justify-center">
                    
                    <label 
                    disabled = {slots.length===0}
                    htmlFor="booking-modal" 
                    className="btn btn-primary text-white"
                    onClick={() => setTreatment(AppointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;