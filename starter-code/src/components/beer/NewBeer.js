import React from 'react'
import Header from '../misc/Header'
import BeerServices from '../../services/BeerService'
import { Redirect } from 'react-router-dom'

const valid = {
    name: v => v.length > 5,
    tagline: v => v.length > 5,
    description: v => v.length > 5,
    first_brewed: v => v.length > 3,
    brewers_tips: v => v.length >3,
    attenuation_level: v => v > 1 ,
    contributed_by: v => v.length > 4
}

class NewBeer extends React.Component {

    state = {
        data: {
            name:'',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips:'',
            attenuation_level: 0,
            contributed_by: ''
        },
        error: {
            name: true,
            tagline: true,
            description: true,
            first_brewed: true,
            brewers_tips: true,
            attenuation_level: true,
            contributed_by: true
        },
        touch:{},
        created: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const body = {...this.state.data}
        BeerServices.newBeer(body)
        .then(data =>{
            alert(data.message)
            this.setState({
                created:true
            })
        }).catch(console.error)
    }

    handleBlur = (e) => {
        const attr = e.target.name
        this.setState({
          touch:{
            ...this.state.touch,
            [attr]: true
          }
        })
      }

    handleChange = (e) => {
        const {name,value} = e.target
        const isValid = valid[name](value)

        this.setState({
            data:{
                ...this.state.data,
                [name]: value
            },
            error: {
                ...this.state.error,
                [name]: !isValid
            }
        })
    }

    render() {
        const {data,error,touch, created} = this.state
        const anyError = Object.values(error).some(x => x)

        if (created) {
            return <Redirect to="/beers"/>
        }

        return (
            <div className="NewBeer">
                <Header />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input 
                            className={`form-control ${error.name && touch.name ? 'is-invalid' : ''}`} 
                            type="text" 
                            name="name" 
                            id="name"
                            value={data.name}
                            onBlur={this.handleBlur}
                            onChange={this.handleChange}
                        />
                        {error.name && touch.name &&(
                        <div className="invalid-feedback">
                            Must be > 5
                        </div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="tagline">Tagline:</label>
                        <input 
                            className={`form-control ${error.tagline && touch.tagline ? 'is-invalid' : ''}`} 
                            type="text" 
                            name="tagline" 
                            id="tagline"
                            value={data.tagline}
                            onBlur={this.handleBlur}
                            onChange={this.handleChange}
                        />
                        {error.tagline && touch.tagline &&(
                        <div className="invalid-feedback">
                            Must be > 5
                        </div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input 
                            className={`form-control ${error.description && touch.description ? 'is-invalid' : ''}`} 
                            type="text" 
                            name="description" 
                            id="description"
                            value={data.description}
                            onBlur={this.handleBlur}
                            onChange={this.handleChange}
                        />
                        {error.description && touch.description &&(
                        <div className="invalid-feedback">
                            Must be > 5
                        </div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="first_brewed">First Brewed:</label>
                        <input 
                            className={`form-control ${error.first_brewed && touch.first_brewed ? 'is-invalid' : ''}`} 
                            type="text" 
                            name="first_brewed" 
                            id="first_brewed"
                            value={data.first_brewed}
                            onBlur={this.handleBlur}
                            onChange={this.handleChange}
                        />
                        {error.first_brewed && touch.first_brewed &&(
                        <div className="invalid-feedback">
                            Must be > 3
                        </div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="brewers_tips">Brewers tips:</label>
                        <input 
                            className={`form-control ${error.brewers_tips && touch.brewers_tips ? 'is-invalid' : ''}`} 
                            type="text" 
                            name="brewers_tips" 
                            id="brewers_tips"
                            value={data.brewers_tips}
                            onBlur={this.handleBlur}
                            onChange={this.handleChange}
                        />
                        {error.brewers_tips && touch.brewers_tips &&(
                        <div className="invalid-feedback">
                            Must be > 3
                        </div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="attenuation_level">Attenuation Level:</label>
                        <input 
                            className={`form-control ${error.attenuation_level && touch.attenuation_level ? 'is-invalid' : ''}`}  
                            type="number" 
                            name="attenuation_level" 
                            id="attenuation_level"
                            value={data.attenuation_level}
                            onBlur={this.handleBlur}
                            onChange={this.handleChange}
                        />
                        {error.attenuation_level && touch.attenuation_level &&(
                        <div className="invalid-feedback">
                            Must be > 1
                        </div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="contributed_by">Contributed By:</label>
                        <input 
                            className={`form-control ${error.contributed_by && touch.contributed_by ? 'is-invalid' : ''}`}
                            type="text" 
                            name="contributed_by" 
                            id="contributed_by"
                            value={data.contributed_by}
                            onBlur={this.handleBlur}
                            onChange={this.handleChange}
                        />
                        {error.contributed_by && touch.contributed_by &&(
                        <div className="invalid-feedback">
                            Must be > 4
                        </div>
                        )}
                    </div>
                    <button disabled={anyError} className="btn btn-primary" type="submit">ADD NEW</button>
                </form>
            </div>
        )
    }

}

export default NewBeer