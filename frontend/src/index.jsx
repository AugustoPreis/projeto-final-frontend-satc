import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './router/AppRouter';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);