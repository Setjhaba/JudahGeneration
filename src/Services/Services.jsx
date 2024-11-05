import React from 'react'
import "./Services.css"


function Services() {
  return (
    <>
      <section className='services-container' id='services'>
        <h2>Services</h2>
        
        <div className="services-content">
          

          <div className="services1">
             <h3>Ministry Development Programs</h3>
          
            <ul>
              <li>Youth Ministry Development</li>
              <li>Mens Fellowship Program</li>
              <li>Womens Ministry Development</li>
              <li>Children Ministry Development</li>
              <li>Young Adults Program</li>
              <li>Church Governance (Church leadership and elder workshop on biblical church governance)</li>
            </ul>  
          </div>  

          <div className="services2">
            <h3>Collaborative Church Events and Initiatives</h3>

            <ul>
              <li>Revival Services, Crusades and Open-Air Gatherings</li>
              <li>All night session and Worship evenings</li>
              <li>Team-Building camps and Fellowship events</li>
              <li>Judah Generation concerts, Prayer Sessions, Worship Summits</li>
              <li>Leadership Seminars and Spirit-Building Workshops</li>
            </ul>
            </div>
         
        </div>

        
        
      </section>
    </>
    
  )
}

export default Services