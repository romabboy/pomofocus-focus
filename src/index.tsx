import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from './pages/Home';
import './styles/index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HomePage title='Home' />
  </React.StrictMode>
);
