import Navbar from '../../components/Navbar';
import ProductImage from '../../assets/images/product-card.png';

import './styles.css';

const Catalog = () => {
  return (
    <>
      <Navbar />
      <div className="catalog-container">
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

        <div className="catalog-card-container">
          <div className="catalog-image-container">
            <img src={ProductImage} alt="Imagem do veículo" />
          </div>
          <div className="catalog-content-btn-container">
            <div className="catalog-content-container">
              <h1>Audi Supra TT</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate, nisi
              </p>
            </div>
            <div className="btn-model">
              <button type="submit">Comprar</button>
            </div>
          </div>
        </div>

        <div className="catalog-card-container">
          <div className="catalog-image-container">
            <img src={ProductImage} alt="Imagem do veículo" />
          </div>
          <div className="catalog-content-btn-container">
            <div className="catalog-content-container">
              <h1>Audi Supra TT</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate, nisi
              </p>
            </div>
            <div className="btn-model">
              <button type="submit">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
