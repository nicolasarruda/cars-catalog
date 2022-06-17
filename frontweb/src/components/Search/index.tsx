import './styles.css';

const Search = () => {
  return (
    <>
      <div className="search-btn-container">
        <div className="search-container btn-model-search">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Digite sua busca"
          />
          <button type="submit">Buscar</button>
        </div>
      </div>
    </>
  );
};

export default Search;
