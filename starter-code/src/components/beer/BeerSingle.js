import React from 'react'

const BeerSingle = ({image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by}) => {
    return (
        <div className="BeerCard card">
            <img className="card-img-top" src={image_url} alt="Pic" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{tagline}</p>
                <p>{first_brewed}</p>
                <p><b>Attenuation level:</b>{attenuation_level}</p>
                <p>{description}</p>
                <p className="card-text"><b>Created by:</b> {contributed_by}</p>
            </div>
        </div>
    )
}

export default BeerSingle