import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

//this is my countries data load componet...
const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const URL = `https://restcountries.com/v3.1/all`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  },[])

  return (
    <div>
      <div className="hader">
        <h1>This is my rest countries data</h1>
        <h2>Available countries number : {countries.length}</h2>
      </div>

      <div className="countries">
      {
          countries.map((country) => {
          // console.log(country.currencies)
          return (
            <Country
              key={country.capital}
              name={country.name}
              image={country.flags}
              icon={country.flag}
              capital={country.capital}
              area={country.area}
              population={country.population}
              region={country.region}
            >
     
            </Country>
          )
        })
      }
      </div>
    </div>
  )
}

const Country = (props) => {
  const { name, image, icon, area, capital, population, region} = props;

  return (
    <div className="country">
      <img src={image.svg ? image.svg : ''} width="300px" alt="country"/>
      <h3>Name: {name.official ? name.official : ''} <span>{icon}</span></h3>
      <div>
        <p>Capital: { capital? capital: ''}</p>
        <p>Area: { area? area: ''}</p>
        <p>population: {population ? population : ''}</p>
        <p>region: { region? region: ''}</p>
      </div>
    </div>
  )
}

export default App;
