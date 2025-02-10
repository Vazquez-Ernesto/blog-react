import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
