import './App.css';
import React from 'react';
import { 
  BrowserRouter as Router, 
  RouterProvider, 
  createBrowserRouter,
  createRoutesFromElements,
  Routes, 
  Route 
} from "react-router-dom"
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
import HostVanPricing from './pages/host/HostVanPricing';
import HostVanInfo from './pages/host/HostVanInfo';
import HostVanPhoto from './pages/host/HostVanPhoto';
import NotFound from './pages/NotFound';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetail />} />
          </Route>
          <Route path="host" element={<HostLayout />} >
            <Route index element={<Dashbaord />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />} >
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhoto />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
  ));
  return (
    <RouterProvider router={router}/>
  )
}




export default App;
