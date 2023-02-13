import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import './index.css';
import App from './App';
import './assets/fonts/KTFJermilov-Solid.ttf';
import { PersistGate } from 'redux-persist/integration/react';
import { ScrollToTop } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor} loading={null}>
        <ScrollToTop />
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
);
