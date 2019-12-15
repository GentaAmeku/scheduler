import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '../../../firebase.config';
import { FirebaseContext } from '../../contexts';

firebase.initializeApp(firebaseConfig);

export const FirebaseApp = ({ children }) => {
  const db = firebase.firestore();
  return (
    <FirebaseContext.Provider value={{ db }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseApp;
