import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const Hero = props => {
  const [hero, setHero] = useState('')
  const getHero = async () => {
    const apiKey = '2582138012013683'

    const resp = await Axios(
      `https://superheroapi.com/api/${apiKey}/search/${props.match.params.hero}`
    )
    setHero(resp.data.results[0])
  }

  useEffect(() => {
    getHero()
  }, [])

  return (
    <div>
      <h1>wow</h1>
      {hero.map(superhero => {
        return <div>{superhero.name}</div>
      })}
    </div>
  )
}

export default Hero
