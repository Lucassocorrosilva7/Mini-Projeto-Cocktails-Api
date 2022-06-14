import React from 'react'
import Loading from "../components/Loading"
import { useParams, Link } from 'react-router-dom'
import './SingleCocktails.scss'

const SingleCocktails = () => {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = {
            name, image, info, category, glass, instructions, ingredients
          }
          setCocktail(newCocktail);
        }
        else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id])
  if (loading) {
    return <Loading />
  }
  if (!cocktail) {
    return <h2 >no cocktail to display</h2>
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail


    return (
      <section className='section-single'>
        <Link className='section-single__link' to="/">
          Voltar para Home
        </Link>
        <h2 className='section-single__title'>{name}</h2>
        <div className='cocktail'>
          <img className='cocktail__image' src={image} alt={name} />
          <div className='descritions'>
            <p>
              <span>Nome: </span>
              {name}
            </p>
            <p>
              <span>Categoria: </span>
              {category}
            </p>
            <p>
              <span>Info: </span>
              {info}
            </p>
            <p>
              <span>glass: </span>
              {glass}
            </p>
            <p>
              <span>Instruções: </span>
              {instructions}
            </p>
            <p>
              <span>Ingredients:</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}>
                  <p>{item}</p>
                </span> : null
              })}
            </p>
          </div>
        </div>
      </section>
    )
  }
}
export default SingleCocktails