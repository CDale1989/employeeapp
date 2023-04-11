import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import EditEmployee from './components/EditEmployee';
import App from './App';
import EditCustomer from './components/EditCustomer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <EditEmployee />
    <EditCustomer />
  </React.StrictMode>
);


