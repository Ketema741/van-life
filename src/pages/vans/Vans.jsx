import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../../server";
import axios from "axios";
import { getVans } from "../../api";

const Vans = () => {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setFilterParms] = useSearchParams();

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    const loadVans = async () => {
      try {
        const data = await getVans()
        setVans(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };



    loadVans();
  }, []);

  const displayedVans = typeFilter ? vans.filter(van => van.type.toLowerCase() == typeFilter.toLocaleLowerCase()) : vans

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={`/vans/${van.id}`}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}

      >
        <img src={van.imageUrl} alt="single van" />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  // const genNewSearchParms = (key, value) => {
  //   const sp = new URLSearchParams(searchParms);
  //   if (!value) {
  //     sp.delete(key);
  //   } else {
  //     sp.set(key, value);
  //   }

  //   return `?${sp.toString()}`;
  // }

  const handleFilterChange = (key, value) => {
    setFilterParms(prevParams => {
      if (!value) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }

      return prevParams;
    })
  }


  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        {/* <Link className="van-type simple" to={genNewSearchParms("type", "simple")}>
          Simple
        </Link>
        <Link className="van-type luxury" to={genNewSearchParms("type", "luxury")}>
          Luxiry
        </Link>
        <Link className="van-type rugged" to={genNewSearchParms("type", "rugged")}>
          Rugged
        </Link>
        <Link className="van-type clear" to={genNewSearchParms("type", null)}>

          Clear
        </Link> */}
        <button className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`} onClick={() => handleFilterChange("type", "simple")}>Simple</button>
        <button className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`} onClick={() => handleFilterChange("type", "luxury")}>Luxury</button>
        <button className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`} onClick={() => handleFilterChange("type", "rugged")}>Rugged</button>
        {
          typeFilter ?
            <button className="van-type clear" onClick={() => handleFilterChange("type", null)}>clear</button>
            : null
        }
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;
