import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const HostVanDetail = () => {
  const { id } = useParams()
  const [currentVan, setCurrentVan] = useState(null)


  useEffect(() => {

    const getHostVans = async () => {
      const response = await axios.get(`/api/host/vans/${id}`);
      setCurrentVan(response.data.vans[0]);
    }
    getHostVans();
  }, [id])

  if (!currentVan) {
    return <h1>Loading...</h1>
  }

  return (
    <section>
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
      </div>
    </section>
  )
}
export default HostVanDetail;