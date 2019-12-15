import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { FirebaseApp } from './shared';

const reducer = combineReducers({
  form: formReducer,
});

const store = createStore(reducer);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <FirebaseApp>
        <App />
      </FirebaseApp>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.unregister();
