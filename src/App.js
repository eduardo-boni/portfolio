import './App.css';
import PagesRoutes from './Routes';
import NavBar from './components/NavBar';
import Footer from './components/ProjectDev';

function App() {

  return (
      <div className="App">
        <NavBar />
        <PagesRoutes />
        <Footer/>
      </div>
  )
}

export default App;
