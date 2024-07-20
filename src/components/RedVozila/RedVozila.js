import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RezervisiVozilo from '../RezervisiVozilo/RezervisiVozilo';
import VratiVozilo from '../VratiVozilo/VratiVozilo';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
function RedVozila({automobil, obrisiAutomobil, snimiIzmene, onOcena, onRezervacija}){
    var[izmena, setIzmena] = useState(false)
    var[model, setModel] = useState(automobil.model)
    var[godiste, setGodiste] = useState(automobil.godiste)
    var[cena, setCena] = useState(automobil.cena)
    var[klima, setKlima] = useState(automobil.klima)
    var[dostupnost, setDostupnost] = useState(automobil.dostupnost)
    var[ocene, setOcene] = useState(automobil.ocene)
    
    
    const Polje = styled(TableCell)(({ theme }) => ({
        '&.MuiTableCell-root': {
            border: '1px solid',
            fontSize: '1rem',
            textAlign: 'center',
        },
    }));
    

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
            color: '#ff3d47',
        },
    });

    const IzmeniDugme = styled(Button)({
        transition: 'background-color 0.3s',
        '&:hover': {
          backgroundColor: 'rgb(0, 160, 255)',
          color: 'white'
        },
      });

    const SacuvajDugme = styled(Button)({
        transition: 'background-color 0.3s',
        '&:hover': {
            backgroundColor: 'rgb(60, 179, 113)',
            color: 'white'
        },
    });

    const ObrisiDugme = styled(Button)({
        transition: 'background-color 0.3s',
        '&:hover': {
            backgroundColor: 'rgb(255, 25, 45)',
            color: 'white'
        },
    });

    const handleKlima = (e) => {
        setKlima(e.target.checked)
    }

    const rezervisiVozilo = () => {
        setDostupnost(!dostupnost)
    }

    const rezervisiVoziloRez = (id) => {
        setDostupnost(!dostupnost)
        onRezervacija(id)
    }

    const dodajOcenu = (noveOcene) => {
        setOcene(noveOcene)
        onOcena(automobil.id)
    }

    function izracunajProsek(niz) {
        const suma = niz.reduce((acc, val) => acc + val, 0);
        return niz.length ? suma / niz.length : 0;
    }

    return (
        <TableRow hover sx={{':hover': {boxShadow: 1}}} key={automobil.id}>
            <Polje>
                {
                    izmena 
                    ? <TextField variant="outlined" value={model} onChange={e => (setModel(e.target.value))}/> 
                    : model
                }
            </Polje>

            <Polje>
                {
                    izmena 
                    ? <TextField variant="outlined" inputProps={{ min: 0}} type="number" value={godiste} onChange={e => (setGodiste(e.target.value))}/> 
                    : godiste
                }
            </Polje>

            <Polje>
                {
                    izmena 
                    ? <TextField variant="outlined" inputProps={{ min: 0}} type="number" value={cena} onChange={e => (setCena(e.target.value))}/> 
                    : <span dangerouslySetInnerHTML={{ __html: cena + "&euro;" }} />
                }
            </Polje>

            <Polje style={{ backgroundColor: klima ? '#e5ffe5' : '#ffd6d6'}}>
                {
                    izmena
                    ? <Checkbox variant="outlined" checked={klima} onChange={handleKlima}/>
                    :   klima
                        ? <CheckCircleOutlineIcon/> 
                        : <DoNotDisturbIcon/>
                }
            </Polje>

            <Polje style={{ backgroundColor: dostupnost ? '#e5ffe5' : '#ffd6d6' }}>
                {
                    dostupnost 
                    ? <CheckCircleOutlineIcon/> 
                    : <DoNotDisturbIcon/>
                }
            </Polje>

            <Polje>
                <StyledRating
                    name="customized-color"
                    value={parseFloat(izracunajProsek(ocene).toFixed(2))}
                    readOnly
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
            </Polje>

            <Polje>
                {
                !izmena 
                ? <IzmeniDugme startIcon={<EditIcon/>} variant="outlined" color="primary" sx={{m:1}} onClick={() => (setIzmena(true))}>Izmeni</IzmeniDugme>
                : <SacuvajDugme startIcon={<CheckIcon/>} sx={{m:1}} variant="outlined" color="success" onClick={() => {snimiIzmene({
                        id:automobil.id,
                        model:model,
                        godiste:godiste,
                        cena:cena,
                        klima:klima,
                        dostupnost:dostupnost,
                        ocene:ocene
                    })
                setIzmena(false)}}>Sacuvaj</SacuvajDugme>}

                {
                    dostupnost
                    ? <RezervisiVozilo automobil={automobil} cena={automobil.cena} rezervisiVozilo={rezervisiVoziloRez}></RezervisiVozilo>
                    : <VratiVozilo automobil={automobil} rezervisiVozilo={rezervisiVozilo} dodajOcenu={dodajOcenu} ></VratiVozilo>
                }
                <ObrisiDugme startIcon={<DeleteIcon/>} sx={{m:1}} variant="outlined" color="error" onClick={e => (obrisiAutomobil(automobil.id))}>Obrisi</ObrisiDugme>
            </Polje>
        </TableRow>
    )
}

export default RedVozila