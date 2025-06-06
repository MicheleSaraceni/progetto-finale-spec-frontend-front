import ClassCard from "../components/classCard"

export default function HomePage() {



    return (
        <div className="classes-container">
            <div className="controls d-flex align-items-center justify-content-end">
                <input
                    type="text"
                    placeholder="Cerca..."
                    className="form-control search-input me-2"
                    value={searchValue}
                    onChange={onSearchChange}
                />

                <select
                    className="form-select me-2 filter-select"
                    value={filterBy}
                    onChange={onFilterChange}
                >
                    <option value="title">Titolo</option>
                    <option value="category">Categoria</option>
                </select>

                <select
                    className="form-select sort-select"
                    value={sortOrder}
                    onChange={onSortChange}
                >
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
            </div>

            <div className="cards-wrapper mt-4">
                {classes.map(classData => <ClassCard classData={classData} />)}
            </div>
        </div>
    )
}