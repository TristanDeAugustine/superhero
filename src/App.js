import React, { Component } from 'react'
import Home from './components/Home'
import Hero from './components/Hero'
import SuperHeroes from './components/SuperHeroes'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        {/* <SuperHeroes /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path=":hero" component={Hero} />
        </Switch>
      </Router>
    )
  }
}

export default App
