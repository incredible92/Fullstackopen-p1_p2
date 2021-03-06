import React from 'react'
import Weather from '../components/weather'

const DisplayCountry = ({filteredCountries}) => {
    const capital = filteredCountries[0].capital
    
    return (
        <div>
                <h2>{filteredCountries[0].name}</h2>
                <br/>
            
                capital {filteredCountries[0].capital}<br/>
                population {filteredCountries[0].population}
                <br/>
                <h3>languages</h3>
                <ul>
                {
                    filteredCountries[0].languages.map((lang, index)=>{
                        return <li key={index}>{lang.name}</li>
                    })
                    
                }
                
                 </ul>
                 <br/>
                 <img src={filteredCountries[0].flag}  width="150" height="150" alt="flags"/>
                 <h2>Weather in {capital}</h2>
                 <Weather capital={capital}/>

            </div>
    )
}

export default DisplayCountry