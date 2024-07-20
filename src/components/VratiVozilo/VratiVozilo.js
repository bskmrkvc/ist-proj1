import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Rating from '@mui/material/Rating';
import UndoIcon from '@mui/icons-material/Undo';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

function VratiVozilo({automobil, rezervisiVozilo, dodajOcenu}){
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
            color: '#ff3d47',
        },
    });

    const VratiDugme = styled(Button)({
        transition: 'background-color 0.3s',
        '&:hover': {
          backgroundColor: 'rgb(106, 90, 205)',
          color: 'white'
        },
      });

    const handleClose = () => {
        setOpen(false);
      };

    const handleClickOpen = () => {
        setOpen(true);
      };

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = () => {
        if(value != null ){
          automobil.ocene.push(parseInt(value))
          dodajOcenu(automobil.ocene);  
        }

        rezervisiVozilo();
        handleClose();
      };

    return(
        <>
            <VratiDugme sx={{pl:4, pr:4}} startIcon={<UndoIcon/>} variant="outlined" color="secondary" onClick={handleClickOpen}>Vrati</VratiDugme>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Kakvo biste ocenili Vase iskustvo sa vozilom?</DialogTitle>

                <DialogContent sx={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <StyledRating
                        name="customized-color"
                        onChange={handleChange}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleClick}>Potvrdi</Button>
                </DialogActions>

            </Dialog>
        </>
    )
}

export default VratiVozilo