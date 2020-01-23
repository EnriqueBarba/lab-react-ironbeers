import axios from 'axios'

const http = axios.create({baseURL: "https://ih-beers-api2.herokuapp.com/beers"})

const list = () => http.get('/').then((res) => res.data)
const random = () => http.get('/random').then((res) => res.data)
const details = (id) => http.get(`/${id}`).then((res) => res.data)
const search = (query) => http.get(`/search?q=${query}`).then((res) => res.data)
const newBeer = (body) => http.post('/new',body).then((res) => res.data).catch(console.error)

export default {list, random, details, search, newBeer}