import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/authcontext';
import { ApiProvider } from './context/apicontext';


import { CartProvider } from './context/cartcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <ApiProvider>
      <CartProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CartProvider>
    </ApiProvider>
  </AuthProvider>
);



