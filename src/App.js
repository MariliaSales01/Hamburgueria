import Bebida from './bebidas/Bebida';
import Menu from './cardapio/Menu';
import Footer from './footer/Footer';
import Header from './header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Bebida/>
      <Footer/>
    </div>
  );
}

export default App;
