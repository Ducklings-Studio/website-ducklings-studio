import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Loader from "./components/loader/loader";
import { routes } from "./routes/routes";
import Solenyx from "./components/solenyx/Solenyx";

function App() {
    let query = new URLSearchParams(window.location.search);
    
    return query.has("games") ?
        <Home /> :
        <Solenyx />;
}
export default App;