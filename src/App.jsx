import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import OrderDetails from './components/OrderDetails';
import Breadcrumbs from './components/Breadcrumbs';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Breadcrumbs />
        <div className="content-layout">
          <Sidebar />
          <OrderDetails />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
