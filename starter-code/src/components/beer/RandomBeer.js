import React from 'react'
import Header from '../misc/Header'
import BeerService from '../../services/BeerService'


class RandomBeer extends React.Component {

    state = {
        beer: {}
    }

    componentDidMount() {

        BeerService.random()
            .then((data) => {
                this.setState(
                    { beer: { ...data } }
                )
            })
            .catch()
    }


    render() {
        const b = this.state.beer
        return (
            <div className="BeerDetails">
                <Header />
                <div className="BeerCard card">
                    <img className="card-img-top" src={b.image_url} alt="Pic" />
                    <div className="card-body">
                        <h5 className="card-title">{b.name}</h5>
                        <p className="card-text">{b.tagline}</p>
                        <p>{b.first_brewed}</p>
                        <p><b>Attenuation level:</b>{b.attenuation_level}</p>
                        <p>{b.description}</p>
                        <p className="card-text"><b>Created by:</b> {b.contributed_by}</p>
                    </div>
                </div>
            </div>

        )
    }
}

export default RandomBeer