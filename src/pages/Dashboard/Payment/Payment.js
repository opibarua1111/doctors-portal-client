import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JwIZYG7R8D8HOAh8jUTuwqeW26lBUI2924DV61CpQYOycHT10rfOjhQP0CoY4FtwwF39FyqWfBL2h9rBTHGOobX00I86wa0JS')

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`https://obscure-castle-24556.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId])
    return (
        <div>
            <h2>Please pay for: {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay: $ {appointment.price}</h4>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;