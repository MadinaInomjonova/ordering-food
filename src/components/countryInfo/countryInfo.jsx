import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import { apiURL } from "../util/apiURL"

const CountryInfo = () => {
  const [ country, setCountry ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const [ error, setError ] = useState('')
  const {countryName} = useParams()

  
  useEffect(() => {
    const getCountryByName = async() => {
      try {
        const res = await fetch(`${apiURL}/name/${countryName}`)
  
        if(!res.ok) throw new Error('Could not found!')
  
        const data = await res.json()
        setCountry(data)
        setIsLoading(false)
  
      } catch (error) {
        setIsLoading(false)
        setError(error.message)
      }
    }

    getCountryByName()
  }, [countryName])

  return <div className="country__info__wrapper">
      <button> <Link to={'/'}>Back</Link> </button>

      { isLoading && !error && <h4>Loading.....</h4>}
      { error && !isLoading && <h4>{error}</h4>}

      {country?.map((country, id) => (
        <div key={id} className="country__info__container">
            <div className="country__info-img">
              <img src={country.flags.png} alt={country.flags.alt} />
            </div>

            <div className="country__info">
            <h3>{country.name.common}</h3>
              <h5>Population: <span>{new Intl.NumberFormat().format(country.population)}</span></h5>
              <h5>Region: <span>{country.region}</span></h5>
              <h5>Capital: <span>{country.capital}</span></h5>
              <h5>Sub Region: <span>{country.subregion}</span></h5>
            </div>
        </div>
      ))}
  </div>
}

export default CountryInfo