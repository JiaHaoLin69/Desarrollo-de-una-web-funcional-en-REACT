import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

import Header from './componentes/andres/Header'; 
import Body from './componentes/fran/body'; 
import Footer from './componentes/jiahao/footer';
import AsideAnimes from './componentes/jiahao/aside';

function App() {
  return (
    <div className="layout-grid">  
      {}
      <Header />
      <AsideAnimes />
      <Body />
      <Footer />
      
    </div>
  );
}

export default App;