import './App.css';
import Navbar from './components/Navbar/Navbar'
import TabelaVozila from './components/TabelaVozila/TabelaVozila'; 
import DodajVozilo from './components/DodajVozilo/DodajVozilo'; 
import NajboljeOcenjeni from './components/NajboljeOcenjeni/NajboljeOcenjeni';
import Hero from './components/Hero/Hero'
import Error from './components/Error/Error'
import {Routes, Route} from "react-router-dom" 

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Hero/>}></Route>
                <Route path="/TabelaVozila" element={<TabelaVozila/>}></Route>
                <Route path="/DodajVozilo" element={<DodajVozilo/>}></Route>
                <Route path="/NajboljeOcenjeni" element={<NajboljeOcenjeni/>}></Route>
                <Route path="*" element={<Error/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
