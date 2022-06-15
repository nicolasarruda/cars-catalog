import './styles.css';

const Search = () => {
  return (
    <>
      <div className="catalog-search-btn-container">
        <div className="catalog-search-container btn-model-search">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Digite sua busca"
          />
          <button type="submit" className="btn-model-search">
            Buscar
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
