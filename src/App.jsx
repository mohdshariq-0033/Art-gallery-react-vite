import './App.css';
import Contact from '../src/components/contact';
import Home from '../src/components/home';
import About from '../src/components/about';
import Cars from '../src/components/cars';
import Nature from '../src/components/nature';
import Historical from '../src/components/historical';
import Tech from '../src/components/tech';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
        <BrowserRouter>
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
        </BrowserRouter>
    </>
  );
}

export default App;
