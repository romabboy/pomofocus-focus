import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from './pages/Home';
import './styles/index.css'
import { makeStore } from './store/store';
import { Provider } from 'react-redux';

const store = makeStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HomePage title='Home' />
    </Provider>
  </React.StrictMode>
);
