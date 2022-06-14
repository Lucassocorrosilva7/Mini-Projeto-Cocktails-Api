import React from 'react'
import CocktailList from "../components/CocktailList"
import SearchForm from "../components/SearchForm"
import "./Home.scss"

const Home = () => {
  return (
    <main className='container'>
      <SearchForm/>
      <CocktailList/>
    </main>
  )
}

export default Home