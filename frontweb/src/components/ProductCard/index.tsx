import ProductImage from '../../assets/images/product-card.png';
import './styles.css';

const ProductCard = () => {
  return (
    <>
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
    </>
  );
};

export default ProductCard;
