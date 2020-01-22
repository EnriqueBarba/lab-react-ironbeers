import React from 'react'
import Header from '../misc/Header'
import BeerService from '../../services/BeerService'
import BeerSingle from './BeerSingle'

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
                <BeerSingle 
                    image_url={b.image_url}  
                    name={b.name}  
                    tagline={b.tagline}  
                    first_brewed={b.first_brewed}  
                    attenuation_level={b.attenuation_level}  
                    description={b.description}  
                    contributed_by={b.contributed_by}  
                />
            </div>

        )
    }
}

export default RandomBeer