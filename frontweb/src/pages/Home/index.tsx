import './styles.css';

const Home = () => {
  return (
      <div className="home-container">
          <div className="home-banner">
            <div className="home-image-container">
                <div id="main-image">
                </div>
            </div>
            <div className="home-content-container">
              <div>
                <h1>O carro perfeito para você</h1>
                <p>
                  Conheça nossos caros e dê mais um passo na realização do seu
                  sonho
                </p>
              </div>
            </div>
          </div>
          <div className="home-btn-catalog btn-model">
            <button>Ver catálogo</button>
            <p>Comece agora a navegar</p>
          </div>
        </div>
  );
};

export default Home;
