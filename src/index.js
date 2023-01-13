import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBNMnAxPe7LprhAwmUc8mCfSmSC49r-Ffs",
  authDomain: "tomate-un-mate.firebaseapp.com",
  projectId: "tomate-un-mate",
  storageBucket: "tomate-un-mate.appspot.com",
  messagingSenderId: "802680937332",
  appId: "1:802680937332:web:32863bbf48be29ed8fea21"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
