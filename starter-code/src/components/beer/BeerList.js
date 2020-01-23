import React from 'react'
import Header from '../misc/Header'
import BeerCard from './BeerCard'
import BeerService from '../../services/BeerService'

class BeerList extends React.Component {

    state = {
        beers:  []
    }

    componentDidMount() {
        BeerService.list().then( data => { 
            this.setState({
                beers:data
            })
        })
    }

    render () {
        const print = this.state.beers.map((e,i) => <BeerCard key={i} {...e} />)
        return(
        <div className="BeerList">
            <Header />
            {print}
        </div>
        )
    }

}

export default BeerList