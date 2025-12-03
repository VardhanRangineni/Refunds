import React from 'react';
import '../styles/OrderTracker.css';

const OrderTracker = () => {
    const steps = [
        { label: 'Track Order', status: 'completed', date: 'Sat, Dec 28, 2024 10:48 PM' },
        { label: 'Approval', status: 'completed', date: 'Sat, Dec 28, 2024 10:52 PM' },
        { label: 'Processing', status: 'completed', date: 'Sat, Dec 28, 2024 11:15 PM' },
        { label: 'Dispatch', status: 'completed', date: 'Sun, Dec 29, 2024 11:30 AM' },
        { label: 'Delivery', status: 'completed', date: 'Sun, Dec 29, 2024 01:15 PM' },
    ];

    return (
        <div className="order-tracker">
            <div className="tracker-header">
                <span className="active-tab">Track Order</span>
                <span>Payment Details</span>
            </div>
            <div className="tracker-line-container">
                <div className="tracker-line"></div>
                {steps.map((step, index) => (
                    <div key={index} className={`step ${step.status}`}>
                        <div className="circle"></div>
                        <div className="label">{step.label}</div>
                    </div>
                ))}
            </div>
            <div className="tracker-details">
                <div className="detail-item">
                    <div className="dot green"></div>
                    <div className="text">
                        <strong>Order is out for Delivery</strong>
                        <span>Sun, Dec 29, 2024 12:30 PM</span>
                    </div>
                </div>
                <div className="detail-item">
                    <div className="dot green"></div>
                    <div className="text">
                        <strong>Order Delivered to sandeep gajagani</strong>
                        <span>Sun, Dec 29, 2024 01:15 PM</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderTracker;
