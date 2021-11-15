import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Car = ({ Pcar }) => {
    const { name, descripton, img } = Pcar;
    return (
        <Grid item xs={4} sm={4} md={4} >
            <CardMedia
                component="img"
                height="194"
                style={{ width: '100%', height: '150px', margin: '0 auto' }}
                image={img}
                alt="Paella dish"
            />
            <Card sx={{ minWidth: 275, marginTop: 3 }}>
                <CardContent>

                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" margin="15px" >
                        {descripton}
                    </Typography>

                    <Button style={{ borderRadius: "5px", backgroundColor: "red", color: "white" }} variant="danger">Buy Now</Button>

                </CardContent>

            </Card>
        </Grid>
    );
};

export default Car;