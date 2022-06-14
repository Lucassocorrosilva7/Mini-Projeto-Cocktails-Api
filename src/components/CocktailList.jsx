import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import './CocktailList.scss'

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />
  }
  if (cocktails.length < 1) {
    return (
      <h2>Não existe</h2>
    )
  }

  return (
    <section className='section-cocktails'>
      <h2 className='section-cocktails__title'>
        Bebidas
      </h2>
      <div className='cocktails'>
      {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default CocktailList