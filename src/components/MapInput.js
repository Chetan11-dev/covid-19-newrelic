// doesn't require redux

import React, { useState, useEffect } from 'react';
import DisplayMapData from '../d3/DisplayMapData'
import { Loader } from '../components/Loader'
import './index.css'
const MapInput = () => {

    const [countryResults, setCountryResults] = useState([])
    const [isLoading, setIsLoading] = useState(false);


    useEffect( () => {
        async function fetchData() {
            setIsLoading(true);
            const response = await fetch('https://corona.lmao.ninja/v2/countries')
            const data = await response.json()
            setCountryResults(data)
            setIsLoading(false);
        }
        fetchData();
    }, [])   
    

    return (
        <div>
            {/* loading */}
            {isLoading ? (
                < Loader />
            ) : (
            // )}
            <div className='map-inp'>

                {/* <button className="collapsible1">Close Map Menu</button> */}

                {/* <div className="content1"> */}
                    <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className=" block" value="cases">Total Cases</button>
                    <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className=" block" value="casesPerOneMillion">Total Cases Per Million</button>
                    <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className=" block" value="todayCases">New Cases Today</button>
                    <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className=" block" value="deaths">Total Deaths</button>
                    <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className=" block" value="deathsPerOneMillion">Deaths Per Million</button>
                    <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className=" block" value="todayDeaths">New Deaths Today</button>
                    <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className=" block" value="active">Active Cases</button>
                    <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className=" block" value="activePerOneMillion">Active Cases Per Million</button>
                    <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className=" block" value="recovered">Recovered Cases</button>
                    <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className=" block" value="recoveredPerOneMillion">Recovered Cases Per Million</button>
                    <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className=" block" value="critical">Critical Cases</button>
                    <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className=" block" value="criticalPerOneMillion">Critical Cases Per Million</button>
                    <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className=" block" value="tests">Number of Tests</button>
                    <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className=" block" value="testsPerOneMillion">Tests Per Million</button>
                    <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className=" block" value="population">Population</button>
                    <button onClick={event => DisplayMapData(event.target.value, event.target.innerText, countryResults)} className=" block" value="reset">Reset Map</button>
                {/* </div> */}

            </div>

            )}
        </div>
    )
}

export default MapInput