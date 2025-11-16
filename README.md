# React Starships Search ˖✶⋆.˚ 🛸

A small React app that fetches data from the **Star Wars API (SWAPI)** and lets users search for starships by name.

## Features

- Fetch and display a list of starships from SWAPI  
- Show key details for each starship:
  - Name  
  - Starship class  
  - Manufacturer  
  - Model  
- Search bar with:
  - Partial name matching (e.g. “falcon” → “Millennium Falcon”)  
  - Case-insensitive search  
- Search metadata:
  - Number of results currently shown  
  - Last search term (or a default message if no search was made)  
- “Show all starships” button to reset the search results  
- Simple Star Wars–themed UI (custom font, glowing title, starry background)

## Tech Stack

- React (Vite)
- JavaScript (ES6+)
- CSS
- Axios
- Star Wars API (SWAPI)

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
