import React from 'react';
import ReactDOM from 'react-dom'; // Correct import
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './features/authorization/hooks/auth_context';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

