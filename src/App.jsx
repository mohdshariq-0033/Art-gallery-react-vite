import './App.css';
import Contact from '../src/components/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Cars from './components/cars';
import Nature from './components/nature';
import Historical from './components/historical';
import Tech from './components/tech';
import { BrowserRouter,Routes,Route, } from 'react-router-dom';

function App() {
  return (
    <>
        <BrowserRouter>
        <Navbar/>
    <Routes>
          <Route path="/"
          element={<Home/>}>
          </Route>
          <Route path="/about"
          element={<About/>}>
          </Route>
          <Route path="/contact"
          element={<Contact/>}>
          </Route>
          <Route path="/cars"
          element={<Cars/>}>
          </Route>
          <Route path="/nature"
          element={<Nature/>}>
          </Route>
          <Route path="/historical"
          element={<Historical/>}>
          </Route>
          <Route path="/tech"
          element={<Tech/>}>
          </Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  );
}

export default App;
