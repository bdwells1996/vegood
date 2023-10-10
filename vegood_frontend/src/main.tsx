import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId='164579935477-2csiu0lpv1ujcm7hhsutdpkid6ed3rdh.apps.googleusercontent.com'>
    <React.StrictMode>
        <App />
    </React.StrictMode>,
  </GoogleOAuthProvider>
)
