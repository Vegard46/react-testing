import React from 'react';
import './styles/App.css';
import CardMenu from "./components/CardMenu";
import WheelMenu from "./components/WheelMenu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import JavaScriptDetail from "./components/JavaScriptDetail";

function App() {
  return (
    <div className="App center-container">
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<WheelMenu/>}/>
                    <Route path="languages" element={<CardMenu/>}/>
                    <Route path="languages/js" element={<JavaScriptDetail/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
