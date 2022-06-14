import React from 'react'
import { Link } from "react-router-dom";
import "./Cocktail.scss"

const Cocktail = ({image,name,id,info,glass}) => {
  return (
    <article>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail${id}`}>Detalhes</Link>
      </div>
    </article>
  )
}

export default Cocktail