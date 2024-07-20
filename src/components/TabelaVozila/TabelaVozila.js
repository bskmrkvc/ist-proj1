import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useEffect } from 'react';
import RedVozila from '../RedVozila/RedVozila';
import Slide from '@mui/material/Slide';

function TabelaVozila(){
    var [automobili, setAutomobili] = useState([])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('vozila'));
        if (data.length > 0) {
        data.sort(function(a,b){
            return a.model.localeCompare(b.model);
        })
         setAutomobili(data)
        }
    }, []);

    useEffect(() => {
        automobili.sort(function(a,b){
            return a.model.localeCompare(b.model);
        })
        localStorage.setItem('vozila', JSON.stringify(automobili));
      }, [automobili]);

    
    const obrisiAutomobil = (id) => {
        automobili = automobili.filter(a => a.id !== id)
        automobili.sort(function(a,b){
            return a.model.localeCompare(b.model);
        })
        setAutomobili(automobili.map(a=>a))
    }

    const snimiIzmene = (automobil) => {
            var automobilIndex = automobili.findIndex(a => a.id === automobil.id)
            automobili[automobilIndex] = automobil
            automobili.sort(function(a,b){
                return a.model.localeCompare(b.model);
            })
            setAutomobili(automobili.map(a=>a))
    }

    const handleOnOcena = (id) => {
        var automobilIndex = automobili.findIndex(a => a.id === id)
        automobili[automobilIndex].dostupnost = !automobili[automobilIndex].dostupnost
        automobili.sort(function(a,b){
            return a.model.localeCompare(b.model);
        })
        setAutomobili(automobili.map(a=>a))
    }

    const handleRez = (id) => {
        var automobilIndex = automobili.findIndex(a => a.id === id)
        automobili[automobilIndex].dostupnost = !automobili[automobilIndex].dostupnost
        automobili.sort(function(a,b){
            return a.model.localeCompare(b.model);
        })
        setAutomobili(automobili.map(a=>a))
    }

    const HeaderPolje = styled(TableCell)`
    &.MuiTableCell-root {
      border-left: 1px solid black;
      border-right: 1px solid black;
      font-weight: bolder;
      font-size: 1.5rem;
      text-align: center;
    }
  `;

    return(
    <div>
        <h1>Informacije i raspolozivost svih vozila</h1>
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <Paper elevation={10} sx={{ margin: '0 10%' }}>
                <Table sx={{border: 1}} stickyHeader>
                    <TableHead>
                        <TableRow>
                            <HeaderPolje>Model</HeaderPolje>
                            <HeaderPolje>Godiste</HeaderPolje>
                            <HeaderPolje>Cena</HeaderPolje>
                            <HeaderPolje>Klima</HeaderPolje>
                            <HeaderPolje>Dostupnost</HeaderPolje>
                            <HeaderPolje>Ocena</HeaderPolje>
                            <HeaderPolje>Kontrole</HeaderPolje>
                        </TableRow>
                    </TableHead>
                
                    <TableBody>
                        {automobili.map(a => {
                            return(
                                <RedVozila key={a.id} automobil={a} snimiIzmene={snimiIzmene} obrisiAutomobil={obrisiAutomobil} onOcena={handleOnOcena} onRezervacija={handleRez}/>
                            )
                        })}
                    </TableBody>

                </Table>
            </Paper>
        </Slide>
    </div>  
    )
}

export default TabelaVozila