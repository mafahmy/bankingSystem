import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import AdminDashScreen from './screens/AdminDashScreen';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";              
import LoginScreen from './screens/LoginScreen';
import HomeScreen from  './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    
    
    <Navbar />
      {/* <AdminDashScreen /> */}
      {/* <HomeScreen /> */}
      {/* <LoginScreen />
      <RegisterScreen /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
      <main>
        <Routes>
            <Route path="/" element={<HomeScreen />} exact></Route>
            <Route path="/login" element={<LoginScreen />}></Route>
            <Route path="/register" element={<RegisterScreen />}></Route>

            {/* Will be Protected Route */}
            <Route path="/adminPanel" element={<AdminDashScreen />} />
        </Routes>
      </main>
    
    </BrowserRouter>
  );
}

export default App;
