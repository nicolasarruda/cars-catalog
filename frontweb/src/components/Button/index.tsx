import Home from '../../pages/Home';
import ProductCard from '../ProductCard';
import Search from '../Search';
import './styles.css';

const Button = () => {

  let buttonNames = ["Ver Catálogo", "Buscar", "Comprar"];
  let buttonName = "";
  
  if (Home.name === "Home") {
    buttonName = buttonNames[0];
  }
  else

  if (Search.name === "Search") {
    buttonName = buttonNames[1];
  } 
  else

  if (ProductCard.name === "ProductCard") {
    buttonName = buttonNames[2];
  }

  console.log(buttonName);

  return (
    <div className="btn-model">
      <button type="submit">{buttonName}</button>
    </div>
    
  );
};

export default Button;
