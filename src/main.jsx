import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Import Nova styles
import '@visa/nova-styles/styles.css';
import '@visa/nova-styles/themes/visa-light/index.css';
import './index.css'; // Custom styles

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
