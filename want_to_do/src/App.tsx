import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Intro from "./components/Intro/Intro";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Home from "./components/Home/Home";
import {RecoilRoot} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/auth/sign-in" element={<SignIn />} />
          <Route path="/auth/sign-up" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>

  )
}

export default App
