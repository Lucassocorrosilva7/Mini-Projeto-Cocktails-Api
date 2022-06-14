import React from 'react'
import { Link } from "react-router-dom";
import "./Cocktail.scss"

const Cocktail = ({image,name,id,info,glass}) => {
  return (
    <article className='article-cocktail'>
      <div>
        <img src={image} alt={name} />
      </div>
      <div className='article-description'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link className='article-description__link' to={`/cocktail${id}`}>Detalhes</Link>
      </div>
    </article>
  )
}

export default Cocktail