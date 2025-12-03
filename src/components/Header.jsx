import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaShoppingCart, FaBars, FaCloudUploadAlt, FaStore, FaBell } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="bg-white">
            {/* Top Row */}
            <div className="container-fluid py-2 border-bottom">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-4">
                        {/* Logo */}
                        <div className="bg-danger text-white px-3 py-2 rounded fw-bold fs-4 d-flex align-items-center" style={{ height: '45px' }}>
                            <span>MedPlus</span> <span className="fw-light ms-1">Mart</span>
                        </div>

                        {/* Location */}
                        <div className="d-flex align-items-center gap-2">
                            <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                <FaMapMarkerAlt className="text-dark" />
                            </div>
                            <div className="d-flex flex-column" style={{ lineHeight: '1.2' }}>
                                <span className="small fw-medium text-dark d-flex align-items-center">
                                    Below Q Mart, Sreshta Marvel,... <MdKeyboardArrowDown />
                                </span>
                                <span className="text-muted" style={{ fontSize: '10px' }}>Home Delivery & Store Pickup Available</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Icons */}
                    <div className="d-flex align-items-center gap-4">
                        <div className="text-secondary cursor-pointer">
                            <FaCloudUploadAlt size={20} />
                        </div>
                        <div className="text-secondary cursor-pointer">
                            <FaPhoneAlt size={18} />
                        </div>
                        <div className="text-secondary cursor-pointer">
                            <FaStore size={20} />
                        </div>
                        <div className="text-secondary cursor-pointer position-relative">
                            <FaBell size={20} />
                            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                <span className="visually-hidden">New alerts</span>
                            </span>
                        </div>
                        <div className="text-secondary cursor-pointer position-relative">
                            <FaShoppingCart size={20} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '10px' }}>
                                1
                            </span>
                        </div>
                        <div className="d-flex align-items-center gap-1 cursor-pointer">
                            <div className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center fw-medium" style={{ width: '35px', height: '35px' }}>
                                Sg
                            </div>
                            <MdKeyboardArrowDown className="text-dark" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Row */}
            <div className="container-fluid py-2 shadow-sm bg-light">
                <div className="d-flex align-items-center gap-4 text-dark small fw-medium overflow-auto text-nowrap">
                    <div className="cursor-pointer text-dark">
                        <FaBars size={20} />
                    </div>
                    <a href="#" className="text-decoration-none text-secondary">Health Store</a>
                    <a href="#" className="text-decoration-none text-secondary">Pharmacy</a>
                    <a href="#" className="text-decoration-none text-secondary">Diagnostics</a>
                    <a href="#" className="text-decoration-none text-secondary">Doctors</a>
                    <a href="#" className="text-decoration-none text-secondary d-flex align-items-center gap-1">
                        MedPlus Advantage <span className="badge bg-success rounded-pill" style={{ fontSize: '8px', padding: '2px 4px' }}>New</span>
                    </a>
                    <a href="#" className="text-decoration-none text-secondary">MedPlus Payback Points</a>
                    <a href="#" className="text-decoration-none text-secondary">Promotions</a>
                    <a href="#" className="text-decoration-none text-secondary d-flex align-items-center gap-1">
                        Opportunities <span className="badge bg-success rounded-pill" style={{ fontSize: '8px', padding: '2px 4px' }}>New</span>
                    </a>
                    <a href="#" className="text-decoration-none text-secondary">Healthy Life</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
