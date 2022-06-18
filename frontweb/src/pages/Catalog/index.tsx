import Search from '../../components/Search';
import ProductCard from '../../components/ProductCard';

import './styles.css';

const Catalog = () => {
  return (
    <div className="catalog-container">
      <Search />
      <div className="row">
        <div className="col-md-6 col-lg-4 card-container">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 card-container">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 card-container">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 card-container">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 card-container">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 card-container">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 card-container">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 card-container">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 card-container">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
