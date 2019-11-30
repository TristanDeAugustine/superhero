import React, { Component } from 'react'
import Home from './components/Home'
import SuperHeroes from './components/SuperHeroes'

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <SuperHeroes />
      </div>
    )
  }
}

export default App
