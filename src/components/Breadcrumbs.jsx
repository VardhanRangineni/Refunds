import React from 'react';
import '../styles/Breadcrumbs.css';

const Breadcrumbs = () => {
    return (
        <div className="breadcrumbs">
            <span>Home</span> &gt; <span>My Account</span> &gt; <span className="current">Purchase History</span>
        </div>
    );
};

export default Breadcrumbs;
