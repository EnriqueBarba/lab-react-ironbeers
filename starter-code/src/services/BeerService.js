import axios from 'axios'

const http = axios.create({baseURL: "https://ih-beers-api2.herokuapp.com/beers"})

const list = () => http.get('/').then((res) => res.data)
const random = () => http.get('/random').then((res) => res.data)
const details = (id) => http.get(`/${id}`).then((res) => res.data)
const query = (query) => http.get(`/search?q=${query}`).then((res) => res.data)
const newBeer = () => http.post('/new').then((res) => res.data)

export default {list, random, details, query, newBeer}