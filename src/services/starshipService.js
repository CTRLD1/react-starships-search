import axios from "axios";

const URL = 'https://swapi.py4e.com/api/starships'

async function getStarships() {
    try {
        const response = await axios.get(URL)
        if (response.status >= 400 && response.status < 600) {
            // Throw an error if we get a response that doesn't 
            // hold valid starship data.
            throw new Error('Failed to fetch starships.');
        }
        console.log(`starships fetch successful ${response.data.re}` )
        return response.data.results

    } catch (error) {
        console.log(error)
        console.log('Failed to fetch starships.', error)
        return []
    }


}


export { getStarships }