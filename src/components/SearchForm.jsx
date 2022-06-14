import React from 'react'
import { useGlobalContext } from '../context'
import './SearchForm.scss'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus();
  }, [])


  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  }

 const handleSubmit = (e) => {
  e.preventDefault();
 }

  return (
    <section className='section-form'>
      <form onSubmit={handleSubmit}>
        <div className='form'>
          <label htmlFor="name">Pesquise sua bebida favorita</label>
          <input type="text" id='name' ref={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm