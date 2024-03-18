import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Auth0Provider
        domain="dev-dw6xvhd1uzr2h5uh.us.auth0.com"
        clientId="xscUx1Kg8udeADKNatfGS9rbqZyhwdzY"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)