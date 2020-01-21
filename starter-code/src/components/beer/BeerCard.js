import React from 'react'
import { Link } from 'react-router-dom'

const BeerCard = ({_id,image_url, name, tagline, contributed_by}) => {
    return (
        <Link to={`/beers/${_id}`}>
        <div className="BeerCard card">
            <img className="card-img-top" src={image_url} alt="Pic"/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{tagline}</p>
    <p className="card-text"><b>Created by:</b> {contributed_by}</p>
            </div>
        </div>
        </Link>
    )
}

export default BeerCard