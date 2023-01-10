import { createContext, useState } from 'react';


export const BannedCountriesContext = createContext({
    items: [],
    getSingleBannedCountry: () => {},
    addOneToBannedCountries: () => {},
    removeOneFromBannedCountries: () => {}
})

export function BannedCountriesProvider({children}) {
    const [ bannedCountries, setBannedCountries ] = useState([]);


    function getSingleBannedCountry(id) {
        const country = bannedCountries.find(bannedCountry => bannedCountry.country_id === id);
        return country; 
    }

    function addOneToBannedCountries(country){
        const existingCountry = getSingleBannedCountry(country.country_id);

        if((country.country_id) && (existingCountry === undefined)){
            setBannedCountries(
                [
                    ...bannedCountries,
                    country
                ]
            )
        } else {
         return 'fail'
        }

        return 'success'

    }

    function removeOneFromBannedCountries(id){
        const newBannedCountries = bannedCountries.filter(country => country.country_id !== id);
        setBannedCountries(newBannedCountries)

    }

    const contextValue = {
        items: bannedCountries,
        getSingleBannedCountry,
        addOneToBannedCountries,
        removeOneFromBannedCountries,
    }

    return (
        <BannedCountriesContext.Provider value={contextValue}>
            {children}
        </BannedCountriesContext.Provider>
    )

}

export default BannedCountriesProvider;

// Context (bannedCountries, addToBannedCounutries, removeFromBannedCountries)
// Provider -> gives your React app access to all the things in your context