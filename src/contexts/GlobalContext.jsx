import { createContext } from "react";
import { useState, useEffect } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const apiUrl = import.meta.env.VITE_API_URL;
    const [classes, setClasses] = useState([]);

    const getData = async () => {
        try {
            const res = await fetch(`${apiUrl}/classes`);
            const data = await res.json();
            setClasses(data);
            console.log("Dati ricevuti: ", data);
        }
        catch (error) {
            console.error("Errore di recupero dati: ", error)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <GlobalContext.Provider value={{ classes, setClasses }}>
            {children}
        </GlobalContext.Provider>
    )
}


export { GlobalContext, GlobalProvider }