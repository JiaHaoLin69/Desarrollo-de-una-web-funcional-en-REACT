import Header from './componentes/andres/Header'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener el CSS de bootstrap
import Body from './componentes/fran/body'; 
import Footer from './componentes/jiahao/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
