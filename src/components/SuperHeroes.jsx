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
    setCharacterOne(resp.data)
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
      <h2>{character.id}</h2>
    </div>
  )
}

export default SuperHeroes
