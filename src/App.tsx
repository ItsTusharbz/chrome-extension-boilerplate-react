import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';


interface Props {
    title: string;
}

const App: React.FC<Props> = ({ title }: Props) => {
    return <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
    </Routes>;
};

export default App;
