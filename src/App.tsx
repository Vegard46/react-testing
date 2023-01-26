import React from 'react';
import './styles/App.css';
import CardMenu from "./components/CardMenu";
import WheelMenu from "./components/WheelMenu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import JavaScriptDetail from "./components/JavaScriptDetail";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App center-container">
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<WheelMenu/>}/>
                    <Route path="nav" element={<NavBar/>}>
                        <Route path="languages" element={<CardMenu/>}/>
                        <Route path="languages/js" element={<JavaScriptDetail/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
