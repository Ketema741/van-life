import './App.css';
import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import VanDetail, { loader as vanDetailLoader } from './pages/vans/VanDetail';
import Vans, { loader as vansLoader } from './pages/vans/Vans';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import Dashbaord, { loader as dashboardLoader } from './pages/host/Dashbaord';
import Income from './pages/host/Income';
import Reviews from './pages/host/Reviews';
import HostVans, { loader as hostVansLoader } from './pages/host/HostVans';
import HostVanDetail, { loader as hostVanLoader } from './pages/host/HostVanDetail';
import HostVanPricing from './pages/host/HostVanPricing';
import HostVanInfo from './pages/host/HostVanInfo';
import HostVanPhoto from './pages/host/HostVanPhoto';
import NotFound from './pages/NotFound';
import Error from './components/Error';
import { requireAuth } from './utils';
import Login, { loader as loginLoader, action as loginAction } from './pages/Login';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      errorElement={<Error />}
    >
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans"  >
        <Route
          index
          element={<Vans />}
          errorElement={<Error />}
          loader={vansLoader}
        />
        <Route
          path=":id"
          element={<VanDetail />}
          errorElement={<Error />}
          loader={vanDetailLoader}
        />
      </Route>
      <Route path="host" element={<HostLayout />} >
        <Route
          index
          element={<Dashbaord />}
          loader={dashboardLoader}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="vans"
          element={<HostVans />}
          errorElement={<Error />}
          loader={hostVansLoader}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          errorElement={<Error />}
          loader={hostVanLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<HostVanPhoto />}
            loader={async ({ request }) => await requireAuth(request)}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  ));
  return (
    <RouterProvider router={router} />
  )
}




export default App;
