import React from 'react';
import { FaUser, FaMapMarkerAlt, FaHistory, FaFileMedical, FaWallet, FaGift, FaCommentDots } from 'react-icons/fa';
import '../styles/Sidebar.css';

const Sidebar = () => {
    const menuItems = [
        { icon: <FaUser />, label: 'My Account' },
        { icon: <FaMapMarkerAlt />, label: 'My Addresses' },
        { icon: <FaHistory />, label: 'Purchase History', active: true },
        { icon: <FaFileMedical />, label: 'MedPlus Advantage' },
        { icon: <FaFileMedical />, label: 'My Lab Orders' },
        { icon: <FaUser />, label: 'My Doctor Consultations' },
        { icon: <FaHistory />, label: 'Refill History' },
        { icon: <FaFileMedical />, label: 'Health Records' },
        { icon: <FaHistory />, label: 'Frequently Ordered List' },
        { icon: <FaGift />, label: 'FlexiRewards' },
        { icon: <FaWallet />, label: 'MDx Home Wallet History' },
        { icon: <FaHistory />, label: 'MedPlus Payback Points History' },
        { icon: <FaWallet />, label: 'My Wallet' },
        { icon: <FaCommentDots />, label: 'My Complaints' },
    ];

    return (
        <div className="sidebar">
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index} className={item.active ? 'active' : ''}>
                        <span className="icon">{item.icon}</span>
                        <span className="label">{item.label}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
