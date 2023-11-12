import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReduxProvider from './store/provider';
import { AppProvider } from './AppContext';
import { Toaster } from 'react-hot-toast'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReduxProvider>
    <AppProvider>
      <Toaster />
      <App />
    </AppProvider>
  </ReduxProvider>
);
