import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import VanDetail from './pages/vans/VanDetail';
import Vans from './pages/vans/Vans';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import Dashbaord from './pages/host/Dashbaord';
import Income from './pages/host/Income';
import Reviews from './pages/host/Reviews';
import HostVans from './pages/host/HostVans';
import HostVanDetail from './pages/host/HostVanDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetail />} />
          </Route>
          <Route path="host"  element={<HostLayout />} >
            <Route index  element={<Dashbaord />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}




export default App;
