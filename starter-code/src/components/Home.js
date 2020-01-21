import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return(
        <div className="Home">
            <Link className="Link" to="/beers" >
            <div className="card">
                <img className="card-img-top" src="/images/beers.png" alt="Pic"/>
                <div className="card-body">
                    <h5 className="card-title">Beers</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            </Link>
            <Link className="Link" to="/random-beer" >
            <div className="card">
                <img className="card-img-top" src="/images/random-beer.png" alt="Pic"/>
                <div className="card-body">
                    <h5 className="card-title">Random-Beer</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            </Link>
            <Link className="Link" to="/new-beer" >
            <div className="card">
                <img className="card-img-top" src="/images/new-beer.png" alt="Pic"/>
                <div className="card-body">
                    <h5 className="card-title">New Beer</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            </Link>


        </div>
    )
}

export default Home