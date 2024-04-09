import React, { useEffect } from "react"
import { useState } from "react"
import PokemonList from "./PokemonList"
import axios from 'axios'
import Pagination from "./Pagination"

function App() {
  // eslint-disable-next-line no-unused-vars
  const [pokemon, setPokemon] = useState([])
   // where the const has array of useState function with actual pokemon (pokemon) and update pokemon
  // as setpokemon, intitaly we are adding the value which passes through array initially
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPage, setnextPage] = useState() // going to next page
  const [prevPage, setprevPage] = useState() // going to previous page it should be in state only
  const [Loading, setLoading] = useState(true)// it gives the loading effect by your internet connection
  //speed you have 

  useEffect(() =>{
    setLoading(false)
    let cancel 
    axios.get(currentPage, {
      cancelToken: new axios.CancelToken(c => cancel = c)// every time you call it cancels the previous one
    }).then(res => {
      setnextPage(res.data.next)
      setprevPage(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
  });
}, [currentPage]
)
if (Loading) return "Loding.."


  function gotonextPage(){
    setCurrentPage(nextPage)
  }
  function gotoprevPage(){
    setCurrentPage(prevPage)
  }
 
  return (
    // if two or more component is calling use <>...</>
      <>
      <PokemonList pokemon = {pokemon}/>
      <Pagination 
      gotonextPage = {nextPage ? gotonextPage : null}
      gotoprevPage = {prevPage ? gotoprevPage : null}
      />

      </>
      
  )
}

export default App
