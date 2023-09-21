import { createContext, useState } from "react";

export let QtyContext = createContext()


export let QtyProvider = ({children}) =>{
    let [qty, setQty] = useState(1)

    let value = {qty, setQty}

    return (
        <QtyContext.Provider value={value}>
        {children}
        </QtyContext.Provider>
    )

}