import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { apiURL } from "../util/apiURL"
import SearchInput from "../search/searchInput"
import FilterCountry from "../filterCountry/filterCountry"


const AllCountries = () => {
    const [ countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [ error, setError ] = useState('')

    const getCountries = async() => {

        try {
            const res = await fetch(`${apiURL}/all`)

            if(!res.ok) throw new Error('Something went wrong')

            const data = await res.json()
            console.log(data);
            setCountries(data)
            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)
            setError(error.message)
        }
    }

    const getCountryByName = async(countryName) => {
      try {
        const res = await fetch(`${apiURL}/name/${countryName}`)

        if(!res.ok) throw new Error('Not found any country')

        const data = await res.json()
        setCountries(data)
        setIsLoading(false)

      } catch (error) {
        setIsLoading(false)
        setError(error.message)
      }
    }

    const gerCountryByRegion = async(regionName) => {
      try {
        const res = await fetch(`${apiURL}/region/${regionName}`)

        if(!res.ok) throw new Error('Failed......')

        const data = await res.json()
        setCountries(data)
        setIsLoading(false)

      } catch (error) {
        setIsLoading(false)
        setError(error.message)
      }
    }

    useEffect(() => {
      getCountries()
    }, [])

  return (
    <div className="all__country__wrapper">
      <div className="country__top">
        <div className="search">
        <SearchInput onSearch={getCountryByName} />
        </div>

        <div className="filter">
          <FilterCountry onSelect={gerCountryByRegion} />
        </div>
      </div>

      <div className="country__bottom">
        {isLoading && !error && <h4>Loading ......</h4>}
        {!isLoading && error && <h4>{error}</h4>}

        {countries?.map((country, idx) => (
          <Link to={`/country/${country.name.common}`} key={idx}>
            <div className="country__card">
            <div className="country__img">
              <img src={country.flags.png} alt={country.flags.alt} />
            </div>

            <div className="country__data">
              <h3>{country.name.common}</h3>
              <h6>Population: {new Intl.NumberFormat().format(country.population)}</h6>
              <h6>Region: {country.region}</h6>
              <h6>Capital: {country.capital}</h6>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AllCountries
