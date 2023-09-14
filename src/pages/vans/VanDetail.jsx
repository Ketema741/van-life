import React, { Suspense } from "react"
import {
    Link,
    useLocation,
    useLoaderData,
    defer,
    Await,
} from "react-router-dom"
import '../../server'
import { getVan } from "../../api"

export const loader = ({ params }) => {
    return defer({ van: getVan(params.id) });
}

const VanDetail = () => {
    const location = useLocation()
    const dataPromise = useLoaderData();

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    return (
        <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >
                &larr; <span>Back to {type} vans </span>
            </Link>

            <Suspense fallback={<h1>wait a minute bitch</h1>}>
                <Await resolve={dataPromise.van}>
                    {(van) =>
                        <div className="van-detail">
                            <img src={van.imageUrl} alt="van-detail" />
                            <i className={`van-type ${van.type} selected`}>
                                {van.type}
                            </i>
                            <h2>{van.name}</h2>
                            <p className="van-price"><span>${van.price}</span>/day</p>
                            <p>{van.description}</p>
                            <button className="link-button">Rent this van</button>
                        </div>
                    }
                </Await>
            </Suspense>
        </div>
    )
}
export default VanDetail;