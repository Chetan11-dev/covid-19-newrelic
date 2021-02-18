import React from 'react'
import './index.css'

import hero from './heroimg.jpg';    

export default function WorkerRiskChartArticle(params) {

    return <div className='wr' >
        <img src={hero} alt="" style={{margin:'auto' ,width:'100%'}}/>
        <div className="spacer"></div>
        <div className="spacer"></div>

        <h1>The Workers Who Face the Greatest Coronavirus Risk</h1>
        <div className="spacer"></div>

<p>        As the coronavirus continues to spread throughout the World, people with jobs that put them in physical contact with many others are at the greatest risk of becoming sick.

        
        
<br/><br/>Each bubble on this chart represents an occupation.<br/> The bigger the bubble, the more people do that job.<br/>
The vertical position of each bubble is a measure of how often workers in a given profession are exposed to disease and infection.

<br/>The horizontal position is a measure of how close people are to others during their workdays.
<br/>The range slider filter the scale between the mentioned min max 

<br/>
<br/>
 As observed from the graph  

        Health care workers are at the greatest risk — they can encounter diseases and infections daily and typically work in close proximity to one another and their patients. Many are already under quarantine because of exposure to the virus.
        <br/>
Personal care aides and home health aides who work with the elderly — the population most susceptible to the illness — are also vulnerable. </p>

<div className="spacer"></div>
    </div>
}

