import React, { useState, useEffect } from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"
import axios from "axios"


export default function HostVanDetail() {
  const { id } = useParams()
  const [currentVan, setCurrentVan] = useState(null)

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  useEffect(() => {
    const getHostVan = async () => {
      const response = await axios.get(`/api/vans/${id}`)
      setCurrentVan(response.data.vans);

    }
    getHostVan();
  }, [id])

  if (!currentVan) {
    return <h1>Loading...</h1>
  }
  return (
    <section>
      <Link
        to=".."
        relative="path"
        className="back-button"
      >&larr; <span>Back to all vans</span></Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} alt="van" />
          <div className="host-van-detail-info-text">
            <i
              className={`van-type van-type-${currentVan.type}`}
            >
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => isActive ? activeStyles : null}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => isActive ? activeStyles : null}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => isActive ? activeStyles : null}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  )
}
