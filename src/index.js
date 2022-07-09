import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import axios from "axios";

axios.defaults.baseURL = 'https://quotes-control-default-rtdb.europe-west1.firebasedatabase.app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(   <App />);
