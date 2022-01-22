import './App.css';
import NavigacioniMeni from "./components/NavigacioniMeni";
import Pocetna from "./components/Pocetna";
import {useState} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import DodajHranu from "./components/DodajHranu";
import SvePorudzbine from "./components/SvePorudzbine";

function App() {

    const [jelovnik, setJelovnik]=useState([
        {
            id:1,
            naziv:'Leskovačka mućkalica',
            opis:'tri vrste mesa sa prazilukom, ljutom paprikom, paradajzom i peršunovim listom, prilog – kajmak',
            cena:520,
            vreme:'~50min',
            brojPorudzbina:0
        },
        {
            id:2,
            naziv:'Juneći gulaš',
            opis:'prilog – pire krompir',
            cena:480,
            vreme:'~30min',
            brojPorudzbina:0
        },
        {
            id:3,
            naziv:'Bečka šnicla',
            opis:'panirani pileći file, prilog – pomfrit, tartar sos i limun',
            cena:590,
            vreme:'~30min',
            brojPorudzbina:0
        },
        {
            id:4,
            naziv:'Karađorđeva  šnicla',
            opis:'rolovano svinjsko meso punjeno kajmakom, prilog – pomfrit i limun',
            cena:720,
            vreme:'~40min',
            brojPorudzbina:0
        },
        {
            id:5,
            naziv:'Rebarca na kajmaku',
            opis:'svinjska rebarca, kajmak, prilog - pomfrit',
            cena:720,
            vreme:'~30min',
            brojPorudzbina:0
        }
    ]);
    const [jelovnikPrikaz, setJelovnikPrikaz]=useState(jelovnik);

    const [porudzbine, setPorudzbine]=useState([]);
    const [brojPoruzbina,setBrojPoruzbina]=useState(0);

    function vratiId(){
        return jelovnik.length==0?1:jelovnik[jelovnik.length - 1].id + 1
    }

    function dodajHranu(e){
        e.preventDefault();
        jelovnik.push({
            id:vratiId(),
            naziv:e.target[0].value,
            opis:e.target[1].value,
            cena:e.target[2].value,
            vreme:e.target[3].value,
            brojPorudzbina:0
        })
        e.target.reset();
        setJelovnik(jelovnik);
        setJelovnikPrikaz(jelovnikPrikaz);
    }

    function napraviPorudzbinu(id){

       jelovnik.forEach((jelo)=>{
           if(jelo.id===id){
               jelo.brojPorudzbina++;
           }
       })
       setJelovnik(jelovnik);
       setJelovnikPrikaz(jelovnik);

       setPorudzbine(jelovnik.filter((jelo)=>(jelo.brojPorudzbina>0)));
       setBrojPoruzbina(brojPoruzbina+1);
    }

    function pretraga(){
        let novNiz=[];
        jelovnik.forEach((jelo)=>{
            if(jelo.naslov.toLowerCase().indexOf(e.target.value.toLowerCase())>-1){
                novNiz.push(jelo)
            }
        })
        setJelovnikPrikaz(novNiz);
    }

  return (
    <div className="App">

        <BrowserRouter>
            <NavigacioniMeni brojPoruzbina={brojPoruzbina} pretraga={pretraga} />
            <Routes>
                <Route path='/' element={<Pocetna jelovnik={jelovnikPrikaz} napraviPorudzbinu={napraviPorudzbinu}/>}/>
                <Route path='/dodajHranu' element={<DodajHranu dodajHranu={dodajHranu}/>}/>
                <Route path='/porudzbine' element={<SvePorudzbine porudzbine={porudzbine}/>}/>


            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
