import './App.css';
import NavBar from './components/NavBar';
import ProjectFooter from './components/ProjectFooter';
import PagesRoutes from './Routes';

function App() {

  return (
      <div className="App">  
        <NavBar />
        <PagesRoutes />
        <ProjectFooter />
      </div>
  )
}

export default App;
