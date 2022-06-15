import Navbar from '../../components/Navbar';
import ProductImage from '../../assets/images/product-card.png';
import Search from '../../components/Search';
import ProductCard from '../../components/ProductCard';

import './styles.css';

const Catalog = () => {
  return (
    <>
      <Navbar />
      <div className="catalog-container">
        <Search />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};

export default Catalog;
