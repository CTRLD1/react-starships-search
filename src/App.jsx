import { useState, useEffect } from 'react'
import './App.css'
import StarshipSearch from './components/StarshipSearch/StarshipSearch'
import StarshipList from './components/StarshipList/StarshipList'
import { getStarships } from './services/starshipService'

function App() {

  const [starshipsData, setStarshipsData] = useState([])

  const [displayedStarships, setDisplayStarships] = useState([])

  useEffect(() => {
    async function fetchStarships() {
      const data = await getStarships()
      setStarshipsData(data)
      setDisplayStarships(data)
    }
    fetchStarships()

  }, [])


  // search feature helping sources i used: 
  // https://www.freecodecamp.org/news/build-a-search-filter-using-react-and-react-hooks/
  // https://www.geeksforgeeks.org/reactjs/how-to-implement-search-filter-functionality-in-reactjs/

  const handleSearch = (query) => {
    const filtered = starshipsData.filter((starship) =>
      starship.name.toLowerCase().includes(query.toLowerCase())
    )
    setDisplayStarships(filtered)
  }


  const handleReset = () => {
    setDisplayStarships(starshipsData)
  }


  return (
    <>
      <div className='stars-bg'></div>
      <main>
        <h1>Star Wars APi</h1>
        <StarshipSearch onSearch={handleSearch} onReset={handleReset} numOfresults={displayedStarships.length} />

        <StarshipList starships={displayedStarships} />
      </main>
    </>
  )
}

export default App
