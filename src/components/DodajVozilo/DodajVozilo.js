import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { forwardRef } from 'react';
import { FormControlLabel } from '@mui/material'; 
import { Box } from '@mui/material';
import { Paper } from '@mui/material';
import { FormGroup } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useNavigate } from "react-router-dom";


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
  });

function DodajVozilo(){
    var[pogresanUnos, setPogresanUnos] = useState(false)
    var[model, setModel] = useState("")
    var[godiste, setGodiste] = useState("")
    var[cena, setCena] = useState("")
    var[klima, setKlima] = useState(false)
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const data = JSON.parse(localStorage.getItem('vozila'));

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSubmit = (e) => {
        if(model === "" | godiste === "" | cena === ""){
            setPogresanUnos(true)
            return;
        }
        setPogresanUnos(false)
        var id = 1
        if(data.length > 0){
            id = data.sort((a,b) => {return b.id - a.id})[0].id+1
        }
        var automobil = {
            id:id,                        
            model:model,
            godiste:parseInt(godiste),
            cena:parseInt(cena),
            klima:klima,
            dostupnost:true,
            ocene:[]}
        data.push(automobil)
        localStorage.setItem('vozila', JSON.stringify(data));
    }

    return(
        <div>
            <h1>Dodaj novo vozilo</h1>
            <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                <Box sx={{m:5, display:"flex", alignItems:"center", justifyContent:"center"}}>
                <br/><br/>
                    <Box sx={{width:"300px"}}>
                        <Paper elevation={10}>
                            <FormGroup onSubmit={handleSubmit}>
                                <TextField 
                                    sx={{m:1}} 
                                    variant="outlined" 
                                    label="Naziv vozila" 
                                    placeholder="Npr. Peugeot 207" 
                                    onInput={e=> setModel(e.target.value)} 
                                    inputProps={{ style: { textAlign: 'center' } }}/>
                                <TextField 
                                    sx={{m:1}} 
                                    variant="outlined" 
                                    label="Godiste vozila" 
                                    placeholder="Npr. 2012" 
                                    onInput={e=> setGodiste(e.target.value)} 
                                    inputProps={{ min: 0, style: { textAlign: 'center'} }} 
                                    type="number"/>
                                <TextField 
                                    sx={{m:1}} 
                                    variant="outlined"
                                    label="Cena vozila po danu u &euro;"
                                    placeholder="Npr. 25" 
                                    onInput={e=> setCena(e.target.value)} 
                                    inputProps={{ min: 0, style: { textAlign: 'center'} }} 
                                    type="number"/>
                                <FormControlLabel 
                                    sx={{ m: 1, display: "flex", flexDirection: "row-reverse"}}
                                    control={<Checkbox variant="outlined" onChange={e => setKlima(e.target.checked)} />}
                                    label="Da li vozilo poseduje klimu? ❄"/>
                                <Button 
                                    sx={{m:1}} 
                                    onClick={(event) => {handleSubmit(event); handleClickOpen();}} 
                                    variant="contained" 
                                    color="success">Dodaj vozilo</Button>
                                <Dialog
                                    open={open}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={handleClose}>
                                    <DialogTitle>
                                        {
                                            pogresanUnos 
                                            ? "Uneti podaci su neodgovarajuci!" 
                                            : "Vozilo je uspesno dodato!"
                                        }
                                    </DialogTitle>

                                    <DialogActions>
                                        {
                                            pogresanUnos 
                                            ? <Button onClick={handleClose}>Pokusaj ponovo</Button> 
                                            : <Button onClick={() => navigate("/TabelaVozila")}>Sva vozila</Button>
                                        } 
                                    </DialogActions>
                                </Dialog>
                            </FormGroup>
                        </Paper>
                    </Box>
                </Box>
            </Slide>
        </div>
    )
}

export default DodajVozilo