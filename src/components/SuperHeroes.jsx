import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Button } from 'reactstrap'

const SuperHeroes = () => {
  const [character, setCharacter] = useState('Batman')
  const [secondCharacter, setSecondCharacter] = useState('')
  const [characterOneData, setCharacterOne] = useState([])

  const getSuperHeroes = async () => {
    const apiKey = '2582138012013683'

    const resp = await Axios(
      `https://superheroapi.com/api/${apiKey}/search/${character}`
    )
    console.log(resp.data)
    console.log(character)
    setCharacterOne(resp.data.results)
  }

  // useEffect(() => {
  //   getSuperHeroes()
  // }, [])

  return (
    <div>
      <input
        type="text"
        value={character}
        onChange={e => setCharacter(e.target.value)}
      />
      <h1>Hello</h1>
      <Button color="primary" onClick={() => getSuperHeroes()}>
        Enter
      </Button>
      <ul>
        {characterOneData.map(hero => {
          return (
            <div key={hero.id}>
              <img src={hero.image.url} />
              <h1>{hero.name}</h1>
              <h2>Power stats</h2>
              <h1>Combat: {hero.powerstats.combat}</h1>
              <h1>Power: {hero.powerstats.power}</h1>
              <h1>Durability: {hero.powerstats.durability}</h1>
              {/* <h1>Speed: {hero.powerstats}</h1> */}
              {/* <h1>Intelligence: {hero.powerstats.intelligence}</h1> */}
              {/* <h1>Strength: {hero.powerstats.strength}</h1> */}
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default SuperHeroes
