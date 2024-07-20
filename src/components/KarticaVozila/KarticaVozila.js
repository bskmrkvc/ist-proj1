import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import placeholder1 from '../../assets/img/placeholder1.png';
import placeholder2 from '../../assets/img/placeholder2.png';
import placeholder3 from '../../assets/img/placeholder3.png';
import placeholder4 from '../../assets/img/placeholder4.png';

const KarticaVozila = ({ car: vozilo }) => {
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
            color: '#ff3d47',
        },
    });

    const StyledCard = styled(Card)({
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        borderRadius: '10px',
        width: '100%'
      });

    function izracunajProsek(niz) {
        const suma = niz.reduce((acc, val) => acc + val, 0);
        return niz.length ? suma / niz.length : 0;
    }

    const placeholders = [placeholder1, placeholder2, placeholder3, placeholder4];
    const randomIndex = Math.floor(Math.random() * placeholders.length);
    const randomPlaceholder = placeholders[randomIndex];

    return (
        <StyledCard>
            <CardContent>
                <img src={randomPlaceholder} alt="Car Placeholder" style={{ borderRadius: '10px', maxWidth: '100%', height: 'auto' }} />
                <Typography variant="h4" component="div">
                {vozilo.model}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                Godiste vozila: {vozilo.godiste}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    <StyledRating
                                name="customized-color"
                                value={parseFloat(izracunajProsek(vozilo.ocene).toFixed(2))}
                                readOnly
                                precision={0.5}
                                icon={<FavoriteIcon fontSize="inherit" />}
                                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                            />
                </Typography>
                <Typography variant="h5" color="text.secondary">
                Klima 
                        <span style={{ marginLeft:'15px', paddingTop:'5px', verticalAlign: 'middle' }}>
                            {
                                vozilo.klima
                                ? <CheckCircleOutlineIcon />
                                : <DoNotDisturbIcon />
                            }
                        </span>
                </Typography>
                <Typography variant="h5" color="text.secondary">
                Dostupnost
                        <span style={{ marginLeft:'15px', paddingTop:'5px', verticalAlign: 'middle'}}>
                            {
                                vozilo.dostupnost
                                ? <CheckCircleOutlineIcon/>
                                : <DoNotDisturbIcon />
                            }
                        </span>
                </Typography>
            </CardContent>
        </StyledCard>
    );
};

export default KarticaVozila;
