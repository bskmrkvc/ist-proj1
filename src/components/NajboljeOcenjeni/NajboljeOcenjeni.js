import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import KarticaVozila from '../KarticaVozila/KarticaVozila';
import Slide from '@mui/material/Slide';

const NajboljeOcenjeni = () => {
    const [cars, setCars] = useState([]);


    function izracunajProsek(niz) {
        const suma = niz.reduce((acc, val) => acc + val, 0);
        return niz.length ? suma / niz.length : 0;
    }

    useEffect(() => {
        const storedCars = JSON.parse(localStorage.getItem('vozila')) || [];
        const sortedCars = storedCars.sort((a, b) => izracunajProsek(b.ocene) - izracunajProsek(a.ocene)).slice(0, 3);
        setCars(sortedCars);
    }, []);

    return (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                <Grid container display='flex' justifyContent="center" marginTop={"0.5rem"}>
                    <h1>Najbolje ocenjena vozila</h1><br/>
                    <Grid item xs={12} sm={10} md={8} lg={10}>
                        <Grid container spacing={3} display='flex' justifyContent="center">
                            {cars.map((car, index) => (
                                <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                                    <KarticaVozila car={car} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
        </Slide>
    );
};

export default NajboljeOcenjeni;
