import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import  './index.css'
import { ToggleProvider } from '../src/contexts/ToggleContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ToggleProvider>
        <App />
        </ToggleProvider>
    </BrowserRouter>
);
