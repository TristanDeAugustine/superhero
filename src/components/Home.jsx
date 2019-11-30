import React, { useState, useEffect } from 'react'
import SuperHeroes from './SuperHeroes'
import Axios from 'axios'
import { Button } from 'reactstrap'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const Home = () => {
  const [hero, setHero] = useState([])
  const [villian, setVillian] = useState([])

  const getImages = async () => {
    const apiKey = '2582138012013683'

    const resp = await Axios(
      `https://superheroapi.com/api/${apiKey}/search/batman`
    )
    // setHero(resp.data.result[])
    console.log(hero)
  }

  useEffect(() => {
    getImages()
  }, [])

  return (
    <div class="container">
      <div class="topnav">
        <Link className="Link-Heroes" to="/Heroes">
          <header className="edit-h1">Heroes</header>
          <img id="img1" className="img-icon" />
        </Link>
        <Link className="Link-Villains" to="/Calendar">
          <header className="edit-h1">Villains</header>
          <img id="img3" className="img-icon" />
        </Link>
      </div>
    </div>
  )
}

export default Home
