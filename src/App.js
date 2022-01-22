import './App.css';
import NavigacioniMeni from "./components/NavigacioniMeni";
import Pocetna from "./components/Pocetna";
import {useState} from "react";

function App() {

    const [jelovnik, setJelovnik]=useState([
        {
            id:1,
            naziv:'Leskovačka mućkalica',
            opis:'tri vrste mesa sa prazilukom, ljutom paprikom, paradajzom i peršunovim listom, prilog – kajmak',
            cena:520,
            vreme:'~50min'
        },
        {
            id:2,
            naziv:'Juneći gulaš',
            opis:'prilog – pire krompir',
            cena:480,
            vreme:'~30min'
        },
        {
            id:3,
            naziv:'Bečka šnicla',
            opis:'panirani pileći file, prilog – pomfrit, tartar sos i limun',
            cena:590,
            vreme:'~30min'
        },
        {
            id:4,
            naziv:'Karađorđeva  šnicla',
            opis:'rolovano svinjsko meso punjeno kajmakom, prilog – pomfrit i limun',
            cena:720,
            vreme:'~40min'
        },
        {
            id:5,
            naziv:'Rebarca na kajmaku',
            opis:'svinjska rebarca, kajmak, prilog - pomfrit',
            cena:720,
            vreme:'~30min'
        }
    ]);


  return (
    <div className="App">
      <NavigacioniMeni />
        <Pocetna jelovnik={jelovnik}/>
    </div>
  );
}

export default App;
