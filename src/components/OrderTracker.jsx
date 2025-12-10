import React, { useState } from 'react';
import '../styles/OrderTracker.css';

const OrderTracker = ({ payments, refunds, orderStatus }) => {
    const [activeTab, setActiveTab] = useState('tracker');

    // Check if any payment is COD
    const isCOD = payments?.some(p => p.mode === 'Cash on Delivery');
    // Hide if order is Pending or Payment is COD
    const showPaymentDetails = !(orderStatus === 'Pending' || isCOD);

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
                <span
                    className={`nav-tab ${activeTab === 'tracker' ? 'active-tab' : ''}`}
                    onClick={() => setActiveTab('tracker')}
                >
                    Track Order
                </span>
                {showPaymentDetails && (
                    <span
                        className={`nav-tab ${activeTab === 'payment' ? 'active-tab' : ''}`}
                        onClick={() => setActiveTab('payment')}
                    >
                        Payment Details
                    </span>
                )}
            </div>

            <div className="mt-4">
                {activeTab === 'tracker' ? (
                    <>
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
                    </>
                ) : (
                    <div>
                        <div className="table-responsive mb-4">
                            <table className="table table-borderless align-middle mb-0">
                                <thead className="table-secondary small">
                                    <tr>
                                        <th className="ps-3 py-3 fw-normal">Transaction ID</th>
                                        <th className="py-3 fw-normal">Date & Time</th>
                                        <th className="py-3 fw-normal">Payment Mode</th>
                                        <th className="py-3 fw-normal">Gateway</th>
                                        <th className="py-3 fw-normal">Status</th>
                                        <th className="text-end pe-3 py-3 fw-normal">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {payments && payments.length > 0 ? (
                                        payments.map((payment, index) => (
                                            <tr key={index} className="border-bottom">
                                                <td className="ps-3 py-3 small fw-medium">{payment?.transactionId || '-'}</td>
                                                <td className="py-3 small text-muted">{payment?.date || '-'}</td>
                                                <td className="py-3 small text-muted">{payment?.mode || '-'}</td>
                                                <td className="py-3 small text-muted">{payment?.gateway || '-'}</td>
                                                <td className="py-3 small">
                                                    <span className={`badge ${payment?.status === 'Success' ? 'bg-success' : payment?.status === 'Pending' ? 'bg-warning text-dark' : payment?.status === 'Refunded' ? 'bg-info text-dark' : 'bg-danger'} bg-opacity-10 text-${payment?.status === 'Success' ? 'success' : payment?.status === 'Pending' ? 'warning' : payment?.status === 'Refunded' ? 'info' : 'danger'}`}>
                                                        {payment?.status || '-'}
                                                    </span>
                                                </td>
                                                <td className="text-end pe-3 py-3 small fw-bold">₹{payment?.amount || '0.00'}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="text-center py-3 text-muted small">No payment details available</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Refund Details Section */}
                        {refunds && refunds.length > 0 && (
                            <div className="mt-4 pt-3 border-top">
                                <h6 className="mb-3 text-dark">Refund Details</h6>
                                <div className="table-responsive mb-3">
                                    <table className="table table-borderless align-middle mb-0">
                                        <thead className="table-secondary small">
                                            <tr>
                                                <th className="ps-3 py-2 fw-normal">Product Name</th>
                                                <th className="py-2 fw-normal">Ordered Qty (Packs / Units)</th>
                                                <th className="py-2 fw-normal">Refunded Qty (Packs / Units)</th>
                                                <th className="text-end pe-3 py-2 fw-normal">Refund Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {refunds.map((refund, index) => (
                                                <tr key={index} className="border-bottom">
                                                    <td className="ps-3 py-3">
                                                        <div className="d-flex align-items-center gap-3">
                                                            <img src={refund.image} alt={refund.productName} className="border rounded" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                                                            <span className="small text-dark">{refund.productName}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 small text-muted">{refund.orderedQty}</td>
                                                    <td className="py-3 small text-muted">{refund.refundedQty}</td>
                                                    <td className="text-end pe-3 py-3 small fw-medium">₹{refund.refundAmount}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="d-flex justify-content-end">
                                    <div style={{ width: '300px' }}>
                                        <div className="d-flex justify-content-between mb-2 small text-muted">
                                            <span>Total Refund Amount</span>
                                            <span className="text-dark fw-medium">₹{refunds.reduce((acc, item) => acc + parseFloat(item.refundAmount), 0).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderTracker;
