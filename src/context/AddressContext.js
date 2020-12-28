import React, { useState, createContext } from 'react';

export const AddressContext = createContext();

const AddressProvider = ({ children }) => {

    const [address, setAddress] = useState({});

    const saveAddress = newAddress => {
        setAddress(newAddress);
    }

    return(
        <AddressContext.Provider value={{address, saveAddress}}>
            { children }
        </AddressContext.Provider>
    )
}

export default AddressProvider;