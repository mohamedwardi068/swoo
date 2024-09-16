import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/authcontext';
import { ApiProvider } from './context/apicontext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <ApiProvider>
  <React.StrictMode>
    <App/>
  </React.StrictMode></ApiProvider>
  </AuthProvider>
);



