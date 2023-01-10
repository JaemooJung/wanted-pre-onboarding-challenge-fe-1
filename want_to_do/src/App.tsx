import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Intro from "./components/Intro/Intro";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Home from "./components/Home/Home";
import {RecoilRoot} from "recoil";
import NotFound from "./components/NotFound/NotFound";
import TodoDetail from "./components/Home/TodoDetail";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/auth/sign-in" element={<SignIn />} />
          <Route path="/auth/sign-up" element={<SignUp />} />
          <Route path="/home" element={<Home />}>
            <Route path="/home/:id" element={<TodoDetail/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>

  )
}

export default App
