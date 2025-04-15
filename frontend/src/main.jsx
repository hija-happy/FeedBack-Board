import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FeedbackProvider } from './context/FeedbackContext'; // Import your FeedbackProvider
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FeedbackProvider>  {/* Wrap with FeedbackProvider */}
      <App />
    </FeedbackProvider>
  </BrowserRouter>
);
