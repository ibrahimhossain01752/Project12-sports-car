import React from 'react';

import car7 from '../../../images/car7.jpg';
import car8 from '../../../images/car8.jpg';
import car9 from '../../../images/car9.jpg';
import car10 from '../../../images/car10.jpg';
import car11 from '../../../images/car11.jpg';
import car12 from '../../../images/car12.jpg';
import car13 from '../../../images/car13.jpg';
import car14 from '../../../images/car14.jpg';
import car15 from '../../../images/car15.jpg';
import car16 from '../../../images/car16.jpg';
import car17 from '../../../images/car17.jpg';
import car18 from '../../../images/car18.jpg'
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Car from '../Car/Car';


const Cars = () => {
    return (
        <Container>
            <Typography variant="h5" gutterBottom component="div" color="cadetblue" marginTop="9px" font-Weight="700">
                More Cars
            </Typography>

            <Box sx={{ flexGrow: 1, marginTop: 5 }}>
                <Grid container spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {/* {
                        Pcars.map(Pcar => <Car
                            key={Pcar}
                            Pcar={Pcar}
                        ></Car>)
                    } */}
                </Grid>
            </Box>
        </Container>
    );
};

export default Cars;