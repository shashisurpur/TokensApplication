import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux' ;
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore'
import firebase from './firebase'
import store from './Store/store'





const rrProps= {
  firebase,
  config:{},
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store} >
    <ReactReduxFirebaseProvider {...rrProps} >
      <React.StrictMode>
        <App  />
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
