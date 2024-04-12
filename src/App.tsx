import React from 'react';
import './App.css';
import {LoginProvider} from "./provider/LoginProvider";
import {MainPage} from "./pages/MainPage";

function App() {
  return (
      <LoginProvider>
        <MainPage/>
      </LoginProvider>
  );
}

export default App;
