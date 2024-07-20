import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material/styles';
import RedoIcon from '@mui/icons-material/Redo';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


function RezervisiVozilo({automobil, cena, rezervisiVozilo}){
    const [open, setOpen] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [provera, setProvera] = useState(false);
    const [ukupno, setUkupno] = useState(null);
  
    const RezervisiDugme = styled(Button)({
      transition: 'background-color 0.3s',
      '&:hover': {
        backgroundColor: 'rgb(255, 165, 0)',
        color: 'white'
      },
    });

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleIzracunaj = () => {
      if (!startDate || !endDate) {
        alert('Morate izabrati oba datuma.');
        return;
      }

      if((new Date().getTime() - startDate.getTime()) > 0 || (new Date().getTime() - endDate.getTime()) > 0 || (endDate.getTime() - startDate.getTime()) < 0){
        alert('Izaberite validan datum.');
        return;
      }
  
      setProvera(true)
      const dayDifference = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      const ukupnaCena = cena * (dayDifference+1);
      setUkupno(ukupnaCena) 
    };
  
  
    const handleConfirm = () => {
      rezervisiVozilo(automobil.id);
      handleClose();
    };
  
    return (
      <>
        <RezervisiDugme startIcon={<RedoIcon/>} variant="outlined" color="warning" onClick={handleClickOpen}>Rezervisi</RezervisiDugme>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Rezervisanje vozila {automobil.model}</DialogTitle>
          <DialogContent>
            <DialogContentText>Odaberite datume preuzimanja i vracanja vozila da biste videli ukupan iznos cene iznajmljivanja.</DialogContentText>
            <DialogContentText sx={{fontWeight:"bold", marginTop: '0.5rem'}}>Cena po danu: {cena} &euro;</DialogContentText>
            <DialogContentText sx={{fontWeight:"bold"}}>Ukupna cena: {ukupno} &euro;</DialogContentText>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid container spacing={2} sx={{marginTop: '0.5rem'}}>
                    <Grid item xs={6}>
                        <DatePicker
                            value={startDate}
                            label="Datum preuzimanja"
                            onChange={(newValue) => setStartDate(newValue)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <DatePicker
                            value={endDate}
                            label="Datum vracanja"
                            onChange={(newValue) => setEndDate(newValue)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Grid>
                </Grid>
            </LocalizationProvider>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleConfirm} disabled={provera ? false : true}>Potvrdi</Button>
            <Button onClick={handleIzracunaj}>Izračunaj cenu </Button>
            <Button onClick={handleClose}>Odustani</Button>
          </DialogActions>

        </Dialog>
      </>
    );
}

export default RezervisiVozilo