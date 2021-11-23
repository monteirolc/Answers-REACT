import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';
import GlobalStyle from './styles/GlobalStyles';
import history from './services/history';
import Elements from './routes';

const App = function () {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Elements />
          <GlobalStyle />
          <ToastContainer
            autoClose={3000}
            position="top-right"
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
          />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
