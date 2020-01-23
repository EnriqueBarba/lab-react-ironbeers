import React from 'react'
import Header from '../misc/Header'
import BeerCard from './BeerCard'
import BeerService from '../../services/BeerService'

class BeerList extends React.Component {

    state = {
        beers: []
    }

    componentDidMount() {
        BeerService.list()
            .then( data => { 
                this.setState({
                    beers:data
                })
            }).catch(console.error)
    }

    handleChange = (e) => {
        BeerService.search(e.target.value)
            .then( data => {
                this.setState({
                    beers: data
                })
            }).catch(console.error)
    }

    render () {
        const print = this.state.beers.map((e,i) => <BeerCard key={i} {...e} />)
        return(
        <div className="BeerList">
            <Header />
            <label className="">Search: </label>
            <input type="text" onChange={(e) => this.handleChange(e)} />
            {print}
        </div>
        )
    }

}

export default BeerList