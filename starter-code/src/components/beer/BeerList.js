import React from 'react'
import Header from '../misc/Header'
import BeerCard from './BeerCard'
import BeerService from '../../services/BeerService'

class BeerList extends React.Component {

    state = {
        data: {
            beers: []
        }
    }

    componentDidMount() {
        BeerService.list().then( data => { 
            const print = data.map((e,i) => <BeerCard key={i} {...e} />)
            this.setState({
                data:{
                    beers:[...print]
                }
            })
        })
    }



    render () {
        return(
        <div className="BeerList">
            <Header />
            {this.state.data.beers}
        </div>
        )
    }

}

export default BeerList