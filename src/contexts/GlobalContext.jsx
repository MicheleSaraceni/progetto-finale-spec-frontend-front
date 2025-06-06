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
            console.log("Dati ricevuti: ", data);

            const detailedClasses = await Promise.all(
                data.map(async (item) => {
                    const resDetail = await fetch(`${apiUrl}/classes/${item.id}`);
                    const dataDetail = await resDetail.json()
                    return dataDetail.class;
                })
            );
            console.log("Dati dettagliati ricevuti: ", detailedClasses);
            setClasses(detailedClasses);
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