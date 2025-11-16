import { useState } from 'react'

function StarshipSearch({ onSearch, onReset, numOfresults }) {

    const [searchTerm, setSearchTerm] = useState('')
    const [prevSearchTerm, setPrevSearchTerm] = useState('')

    // functions
    
    const handleSubmit = (event) => {
        event.preventDefault()
        onSearch(searchTerm)
        setPrevSearchTerm(searchTerm)
        setSearchTerm('')
    }
    
    // src: freecodecamp
    const handleReset = () => {
        onReset()
        setPrevSearchTerm('')
    }

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value)
    }


    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor='search'>Search Term</label>
                <input type='text' id='search' value={searchTerm} onChange={handleInputChange} />

                <button type='submit'>Search</button>
            </form>
{/* 
            <p className='search-meta'>
                Number of results : {numOfresults} {'-'}
                {prevSearchTerm ? `Last Search: ${prevSearchTerm}` : ' Search for a starship by name'}
            </p> */}
            
            {prevSearchTerm && (
                <button onClick={handleReset}>Show All starships</button>
            )}
        </section>
    )
}

export default StarshipSearch
