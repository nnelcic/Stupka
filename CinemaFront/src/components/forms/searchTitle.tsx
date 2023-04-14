const SearchTittle = () => {
    return (
        <div className="input-group mb-3">
            <input
            type="text"
            className="form-control"
            placeholder="Пошук по назві"
            //value=""
            //onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
            <button
                className="btn btn-outline-secondary"
                type="button"
                //onClick={this.searchTitle}
            >
                Пошук
            </button>
        </div>
            </div>           
    )
}

export default SearchTittle;