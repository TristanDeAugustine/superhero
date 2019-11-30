import React from 'react'
import SuperHeroes from './SuperHeroes'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const Home = () => {
  return (
    <div class="container">
      <div class="topnav">
        <Link className="Link-Heroes" to="/Heroes">
          <header className="edit-h1">Heroes</header>
          {<img id="img1" className="img-icon" src={SuperHeroes}></img>}
        </Link>
        <Link className="Link-Villains" to="/Calendar">
          <header className="edit-h1">Villains</header>
          {<img id="img3" className="img-icon" src={Villains}></img>}
        </Link>
      </div>
    </div>
  )
}

export default Home
