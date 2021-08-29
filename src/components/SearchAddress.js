import React from 'react'
import { useState } from 'react';
import '../App.css';
import scriptLoader from 'react-async-script-loader'

import GooglePlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-google-places-autocomplete'

function SearchAddress({ isScriptLoaded, isScriptLoadSucceed }) {
    const [address, setAddress] = useState("");
    const handleChange = (value) => {
        setAddress(value);
    }
    const handleSelect = async value => {
        setAddress(value);
    }

    if (isScriptLoaded && isScriptLoadSucceed) {
        return <div>

            <GooglePlacesAutocomplete
                value={address}
                onChange={handleChange}
                onSelect={handleSelect}
            >
                {({ getInputPops, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        {/* <input {...getInputProps({ placeholder: "Search a place here.." })} /> */}

                        <div>
                            {/* {loading ? <div>...loading</div> : null} */}

                            {suggestions.map((suggestion) => {
                                return (
                                    <div {...getSuggestionItemProps(suggestions)}>
                                        {suggestion.description}</div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </GooglePlacesAutocomplete>
        </div>
    } else {
        return <div></div>
    }
}

export default
    scriptLoader(
        [`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`])
        (SearchAddress);
