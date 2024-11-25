
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
       domain="dev-b8ohprg6s1ughznc.us.auth0.com"
       clientId="XUs3MEt5hI4bgZdSJv1jG7XlU5EWhx0j"
       authorizationParams={{
         redirect_uri: window.location.origin
       }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
)
