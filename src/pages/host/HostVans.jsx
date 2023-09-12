import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const HostVans = () => {
  const [vans, setVans] = useState([])

  useEffect(() => {
    const getHostVans = async () => {
      const response = await axios.get("/api/host/vans");
      setVans(response.data.vans)
    }
    getHostVans()
  }, [])

  const hostVansEls = vans.map(van => (
    <Link
      to={van.id}
      key={van.id}
      className="host-van-link-wrapper"
    >
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ))

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {
          vans.length > 0 ? (
            <section>
              {hostVansEls}
            </section>

          ) : (
            <h2>Loading...</h2>
          )
        }
      </div>
    </section>
  )
}

export default HostVans;