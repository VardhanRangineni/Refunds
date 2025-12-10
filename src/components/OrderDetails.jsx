import React, { useState } from 'react';
import { FaArrowLeft, FaCheckCircle, FaPrint, FaDownload } from 'react-icons/fa';
import OrderTracker from './OrderTracker';
import { mockOrders } from '../data/mockOrders';
import '../styles/OrderDetails.css';

const OrderDetails = () => {
    const [currentOrderIndex, setCurrentOrderIndex] = useState(0);
    const currentOrder = mockOrders[currentOrderIndex];

    const handlePrevOrder = () => {
        setCurrentOrderIndex((prev) => (prev > 0 ? prev - 1 : mockOrders.length - 1));
    };

    const handleNextOrder = () => {
        setCurrentOrderIndex((prev) => (prev < mockOrders.length - 1 ? prev + 1 : 0));
    };

    return (
        <div className="container-fluid p-0">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center gap-2 cursor-pointer">
                    <FaArrowLeft /> <span className="fw-medium">Back To Purchase History</span>
                </div>
                <div className="d-flex gap-3">
                    <button className="btn btn-link text-decoration-none text-dark p-0 d-flex align-items-center gap-1" onClick={handlePrevOrder}>
                        <FaArrowLeft size={12} /> <span style={{ fontSize: '14px' }}>Previous Order</span>
                    </button>
                    <button className="btn btn-link text-decoration-none text-dark p-0 d-flex align-items-center gap-1" onClick={handleNextOrder}>
                        <span style={{ fontSize: '14px' }}>Next Order</span> <FaArrowLeft size={12} style={{ transform: 'rotate(180deg)' }} />
                    </button>
                </div>
            </div>

            <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-0">
                    {/* Status Banner */}
                    <div className="d-flex justify-content-between align-items-center p-3 border-bottom bg-white">
                        <div className="d-flex align-items-center gap-2 text-success">
                            <FaCheckCircle size={20} />
                            <span className="fw-medium">Delivered</span>
                        </div>
                        <div className="text-muted small">
                            Ordered On {currentOrder.date} &bull; Total Amount <span className="text-dark fw-bold">₹{currentOrder.totalAmount}</span>
                        </div>
                    </div>

                    {/* Order ID and Actions */}
                    <div className="d-flex justify-content-between align-items-center p-3">
                        <div className="text-muted small">
                            Order ID: <span className="text-dark fw-medium">{currentOrder.id}</span>
                        </div>
                        <div className="d-flex gap-3 small">
                            <a href="#" className="text-danger text-decoration-none fw-medium">Print Receipt</a>
                            <a href="#" className="text-danger text-decoration-none fw-medium">Re-Order</a>
                        </div>
                    </div>

                    {/* Product Table */}
                    <div className="table-responsive">
                        <table className="table table-borderless align-middle mb-0">
                            <thead className="table-secondary small">
                                <tr>
                                    <th className="ps-3 py-3 fw-normal" style={{ width: '40%' }}>Product Name</th>
                                    <th className="text-center py-3 fw-normal">Discount (%)</th>
                                    <th className="text-center py-3 fw-normal">MRP (Per Unit)</th>
                                    <th className="text-center py-3 fw-normal">Quantity (Packs / Units)</th>
                                    <th className="text-end pe-3 py-3 fw-normal">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentOrder.items.map((item, index) => (
                                    <tr key={index} className="border-bottom">
                                        <td className="ps-3 py-3">
                                            <div className="d-flex align-items-center gap-3">
                                                <img src={item.image} alt={item.name} className="border rounded" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                                                <span className="small fw-medium text-dark">{item.name}</span>
                                            </div>
                                        </td>
                                        <td className="text-center py-3 small">10</td>
                                        <td className="text-center py-3 small">₹{item.mrp}</td>
                                        <td className="text-center py-3 small">{item.qty}</td>
                                        <td className="text-end pe-3 py-3 small fw-medium">₹{item.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pricing Summary */}
                    <div className="d-flex justify-content-end p-3">
                        <div style={{ width: '300px' }}>
                            <div className="d-flex justify-content-between mb-2 small text-muted">
                                <span>Sub Amount:</span>
                                <span className="text-dark fw-medium">₹{currentOrder.pricing.subTotal}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2 small text-muted">
                                <span>Discount Amount:</span>
                                <span className="text-dark fw-medium">{currentOrder.pricing.discount}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2 small text-muted">
                                <span className="text-decoration-underline">Service Charges:</span>
                                <span className="text-dark fw-medium">{currentOrder.pricing.serviceCharges}</span>
                            </div>
                            <div className="d-flex justify-content-between mt-3 pt-2 border-top small">
                                <span className="fw-medium text-muted">Total Amount:</span>
                                <span className="fw-bold text-dark">₹{currentOrder.pricing.total}</span>
                            </div>
                        </div>
                    </div>

                    {/* Refund Section */}
                    {currentOrder.refunds && currentOrder.refunds.length > 0 && (
                        <div className="p-3 border-top">
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
                                        {currentOrder.refunds.map((refund, index) => (
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

                            {/* Refund Summary */}
                            <div className="d-flex justify-content-end">
                                <div style={{ width: '300px' }}>
                                    <div className="d-flex justify-content-between mb-2 small text-muted">
                                        <span>Total Refund Amount</span>
                                        <span className="text-dark fw-medium">₹{currentOrder.refunds.reduce((acc, item) => acc + parseFloat(item.refundAmount), 0).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Edit Section */}
                    {currentOrder.edit && currentOrder.edit.length > 0 && (
                        <div className="p-3 border-top">
                            <h6 className="mb-3 text-dark">Edit Details</h6>
                            <div className="table-responsive mb-3">
                                <table className="table table-borderless align-middle mb-0">
                                    <thead className="table-secondary small">
                                        <tr>
                                            <th className="ps-3 py-2 fw-normal">Product Name</th>

                                            <th className="py-2 fw-normal">Ordered Qty (Packs / Units)</th>
                                            <th className="py-2 fw-normal">Edited Qty (Packs / Units)</th>
                                            <th className="text-end pe-3 py-2 fw-normal">Approved Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentOrder.edit.map((refund, index) => (
                                            <tr key={index} className="border-bottom">
                                                <td className="ps-3 py-3">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <img src={refund.image} alt={refund.productName} className="border rounded" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                                                        <span className="small text-dark">{refund.productName}</span>
                                                    </div>
                                                </td>

                                                <td className="py-3 small text-muted">{refund.orderedQty}</td>
                                                <td className="py-3 small text-muted">{refund.refundedQty}</td>
                                                <td className="text-end pe-3 py-3 small fw-medium">{refund.approvedDate}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Refund Summary
                            <div className="d-flex justify-content-end">
                                <div style={{ width: '300px' }}>
                                    <div className="d-flex justify-content-between mb-2 small text-muted">
                                        <span>Total Refund Amount</span>
                                        <span className="text-dark fw-medium">₹{currentOrder.refunds.reduce((acc, item) => acc + parseFloat(item.refundAmount), 0).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    )}


                    {/* Info Sections */}
                    <div className="row p-4 border-top">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h6 className="text-dark mb-3">Delivery Information:</h6>
                            <div className="small text-muted">
                                <p className="mb-1"><span className="text-dark">Name:</span> Vardhan Rangineni</p>
                                <p className="mb-1"><span className="text-dark">Address:</span> sample adderss abcsdgafdgz -536/4 sfvsfvsavsdnawfnawdoin</p>
                                <p className="mb-1"><span className="text-dark">Email:</span> vardhanrangineni@gmail.com</p>
                                <p className="mb-1"><span className="text-dark">Phone:</span> 12345678909</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h6 className="text-dark mb-3">Order Information:</h6>
                            <div className="small text-muted">
                                <p className="mb-1"><span className="text-dark">Status:</span> {currentOrder.status}</p>
                                <p className="mb-1"><span className="text-dark">Delivery Type:</span> Door Delivery</p>
                                <p className="mb-1"><span className="text-dark">Order Date/Time:</span> {currentOrder.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tracker (kept separate or integrated as needed, keeping separate for now but styled) */}
            <div className="card border-0 shadow-sm p-3">
                <OrderTracker />
            </div>
        </div>
    );
};

export default OrderDetails;
