import '../css/HomePage.css'
import { useContext, useState, useMemo } from "react"
import { GlobalContext } from "../contexts/GlobalContext";
import ClassCard from "../components/classCard"

export default function HomePage() {

    const { classes } = useContext(GlobalContext);
    const [searchValue, setSearchValue] = useState("");
    const [filterBy, setFilterBy] = useState("title");
    const [sortOrder, setSortOrder] = useState("asc");

    const filteredClasses = useMemo(() => {

        return classes.filter((cls) => cls.title.toLowerCase().includes(searchValue.toLowerCase()))
    }, [searchValue, classes])


    return (
        <div className="classes-container">
            <div className="controls d-flex align-items-center justify-content-end">
                <input
                    type="text"
                    placeholder="Cerca..."
                    className="form-control search-input me-2"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />

                <select
                    className="form-select me-2 filter-select"
                    value={filterBy}
                    onChange={(e) => setFilterBy(e.target.value)}
                >
                    <option value="title">Classe</option>
                    <option value="category">Categoria</option>
                </select>

                <select
                    className="form-select sort-select"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
            </div>

            <div className="cards-wrapper mt-4">
                {filteredClasses.map(classData => <ClassCard key={classData.id} classData={classData} />)}
            </div>
        </div>
    )
}