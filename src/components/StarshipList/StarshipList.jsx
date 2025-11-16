import React from 'react'
import StarshipCard from "../StarshipCard/StarshipCard";

function StarshipList({ starships }) {
    if (starships.length === 0) {
        return <p>No starships found</p>
    }
    return (
        <section>
            <h2>Starships</h2>
            <ul>
                {starships.map((starship, idx) => (
                    <StarshipCard key={idx} starship={starship} />
                ))}
            </ul>
        </section>
    )
}

export default StarshipList
