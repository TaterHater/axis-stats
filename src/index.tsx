import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Routes } from "./router";
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyCrSGNAxF-RGkDyBelkEn8C8HO6d2uy_Uw",
  authDomain: "axis-stats.firebaseapp.com",
  databaseURL: "https://axis-stats.firebaseio.com",
  projectId: "axis-stats",
  storageBucket: "axis-stats.appspot.com",
  messagingSenderId: "102831339140",
  appId: "1:102831339140:web:cf6502bea6284c7039b4d1",
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Routes />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
