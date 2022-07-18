import React from 'react'
import PageTemplate from '../Components/pageTemplate'


function HomePage() {
  return (
    <div className='templateContainer'>
        <PageTemplate
            name="Asteroids NeoWs API"
            subText="NeoWs (Near Earth Object Web Service) is a RESTful web service for near earth Asteroid information. With NeoWs a user can: search for Asteroids based on their closest approach date to Earth, lookup a specific Asteroid with its NASA JPL small body id, as well as browse the overall data-set."
            buttonUrl="/AsteroidPage" 
            linkTitle="title" 
            backgroundImageUrl="https://wallpaperaccess.com/full/1325364.jpg"
        />

<PageTemplate
            name="Mars Rover Photos API"
            subText="Image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars. Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover's landing date"
            buttonUrl="/marsPage" 
            linkTitle="title" 
            backgroundImageUrl="https://wallpaperaccess.com/full/538159.jpg"
        />

        
    </div>
  )
}

export default HomePage