import React, { useState } from 'react'
import { getLatLng, geocodeByAddress } from 'react-places-autocomplete/'
import PlacesAutocomplete from 'react-places-autocomplete/'
import { getClimate } from '../utils/getClimate'
import { getWeatherImg } from '../utils/getWeatherImg'
import "../App.css"
import { SearchInput, SuggestionsContainer, LocationContainer } from '../styles/SearchStyles'

export const SearchBar = ({ setLocation, setCoords, setWeather, location }) => {
  const [input, setInput] = useState('')

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(async (latLng) => {
        const climate = await getClimate({ latitude: latLng.lat, longitude: latLng.lng })
        if(climate) {
          setLocation(address)
          setInput('')
          setCoords(latLng)
          setWeather(climate)
        }
      })
      .catch(error => console.error('Error', error))
  }

  return (
    <form className=''>
      <PlacesAutocomplete
        onChange={(address) => setInput(address)}
        value={input}
        onSelect={handleSelect}
        googleCallbackName='initOne'
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className=''>
            <SearchInput
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: ''
              })}
            />
            <SuggestionsContainer display={suggestions.length < 1 ? 'none' : 'block'}>
              {loading && ''}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? 'suggestionActive'
                  : 'suggestionInactive'
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      
                    })}
                    key={suggestion.description}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </SuggestionsContainer>
          </div>
        )}
      </PlacesAutocomplete>
      <div className="locationInput"><img src={getWeatherImg(location)} height="24px" width="24px" /> {location}</div>
    </form>
  )
}


