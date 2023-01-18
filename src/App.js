import { Routes,Route } from 'react-router-dom';
import './App.css';
import Product from './pages/Product';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import Subpage from './pages/Subpage';
import Subpages from './pages/Subpages';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Header sitename="green"/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/product/:productname' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/subpages' element={<Subpages/>}/>
        <Route path=':id' element={<Subpage/>}/>
        <Route/>
        <Routes path="" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
