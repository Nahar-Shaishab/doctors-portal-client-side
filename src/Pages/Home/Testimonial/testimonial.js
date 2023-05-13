import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id:1,
            name:'Winson Herry',
            img: people1,
            reviews:'The dental webpage was user-friendly and made booking my appointment a breeze. I appreciated the clear information and straightforward process.',
            location:'California'
        },
        {
            _id:2,
            name:'Susan',
            img: people2,
            reviews:'I found the dental webpage easy to use and informative. Booking an appointment was a breeze and the staff was helpful and friendly.',
            location:'Dallas'
        },
        {
            _id:3,
            name:'Maria',
            img: people3,
            reviews:'The dental webpage provided a seamless and hassle-free experience for booking my appointment. Kudos to the team for making it so simple and convenient. Iam excited to see what they have in store for my dental needs.',
            location:'New York'
        }
    ]

    return (
        <section className='mt-16'>
            <div className='flex justify-between'>
                <div>
                  <h4 className='text-xl text-primary font-bold'>Testimonial</h4> 
                  <h2 className='text-4xl'>What Our Patients Say</h2> 
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt=''/>
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(reviews => <Review
                    key = {reviews._id}
                    reviews={reviews}
                    ></Review>)
                }
            </div>

        </section>
    );
};

export default Testimonial;