import React, { useContext, useEffect, useState } from 'react'
import { Store } from '../Store'
import { Form, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { Helmet } from 'react-helmet-async';
import CheckoutSteps from '../components/CheckoutSteps';

function PaymentMethodScreen() {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart: { shippingAdress, paymentMethod },
    } = state;

    const [paymentMethodName, setPaymentMethod] = useState(
        paymentMethod || 'Paypal'
    );

    useEffect(() => {
        if (!shippingAdress.adress) {
            navigate('/shipping');
        }
    }, [shippingAdress, navigate])

    const submitHandler = (e) => {
        e.preventDefualt();
        ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName })
    };
    localStorage.setItem('paymentMethod', paymentMethodName);
    navigate('/placeorder');


    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <div className="container small-container">
                <Helmet>
                    <title>Payment Method</title>
                </Helmet>
                <h1 className="my-3">Payment Method</h1>
                <Form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <Form.Check
                            type="radio"
                            id="PayPal"
                            label="PayPal"
                            value="PayPal"
                            checked={paymentMethodName === 'PayPal'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <Button type="submit">Continue</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
    };
    export default PaymentMethodScreen