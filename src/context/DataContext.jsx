import React, { useState } from "react";
import { currentStops } from "../data/data";


export const DataContext = React.createContext(currentStops);

export const ContextProvider = ({ children }) => {
    const [data, setData] = useState(currentStops);

    const updateData = (newObject) => setData(prevData => [...prevData, newObject]) 
    return (
        <DataContext.Provider value={{ data, updateData }}>
            {children}
        </DataContext.Provider>
    )
}