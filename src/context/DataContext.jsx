import React, { useState } from "react";
import { currentStops } from "../data/data";


export const DataContext = React.createContext(currentStops);

export const ContextProvider = ({ children }) => {
    const [dataArray, setDataArray] = useState(currentStops);

    const [dataObject, setDataObject] = useState({})

    const updateData = (data) => {
        console.log(data);
        setDataArray(prevData => [...prevData, data])
    }
    const deleteData = (data) => {
        setDataArray(prevData => prevData.filter(x => x.id != data?.id));
    }
    const updateDataObject = (data, id) => {
        // Map => returns an array and allows you to make changes to the objects in the array it can also change the configuration of the array
        // Find for searching a siingle object in an array
        setDataArray(prevData => prevData.map(obj => {
            if (obj.id == id) {
                return data
            }
            else{
                return obj;
            }
        }))
    }
    return (
        <DataContext.Provider value={{ dataArray, dataObject, updateData, setDataObject, deleteData, updateDataObject }}>
            {children}
        </DataContext.Provider>
    )
}