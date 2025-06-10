import '../css/HomePage.css'
import { useContext, useState, useMemo } from "react"
import { GlobalContext } from "../contexts/GlobalContext";
import ClassCard from "../components/classCard"

export default function Favorites() {

    const { classes, liked } = useContext(GlobalContext);
    const [searchValue, setSearchValue] = useState("");
    const [filterBy, setFilterBy] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    const categories = useMemo(() => {
        const allCats = classes.map(cls => cls.category);
        const uniqueCats = Array.from(new Set(allCats));
        return uniqueCats;
    }, [classes]);

    const filteredClasses = useMemo(() => {

        const orderedClasses = () => {
            if (sortOrder === "asc") {
                return classes.sort((a, b) => a.title.localeCompare(b.title))
            } else {
                return classes.sort((a, b) => b.title.localeCompare(a.title))
            }
        }

        const sortedCategories = () => {
            return orderedClasses().filter((cls) => cls.category.toLowerCase().includes(filterBy.toLowerCase()))
        }

        const searchedTitle = () => {
            return sortedCategories().filter((cls) => cls.title.toLowerCase().includes(searchValue.toLowerCase()))
        }

        const favoritesClass = () => {
            return searchedTitle().filter((cls) => liked.includes(cls.id))
        }

        return favoritesClass()
    }, [searchValue, filterBy, sortOrder, classes])


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
                    <option value="">Tutte le categorie</option>
                    {
                        categories.map((category) => <option key={category} value={category}>{`${category}`}</option>)
                    }
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

            <div className="row cards-wrapper justify-content-center align-items-stretch g-2 mt-4">
                {filteredClasses.length === 0
                    ? <p className="placeholder-text">Non ci sono classi nei preferiti</p>
                    : filteredClasses.map(classData => (
                        <div key={classData.id} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center">
                            <ClassCard classData={classData} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}