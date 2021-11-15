
import React, { useEffect, useState } from "react";
import './HomeCars.css'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";


const HomeCars = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch("https://fathomless-headland-38595.herokuapp.com/allServices")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);


    const newServices = services.slice(0, 6)

    return (
        <Container>
            <Typography variant="h5" gutterBottom component="div" color="cadetblue" font-Weight="700" marginTop="20px">
                BEST SPORTS CAR
            </Typography>

            <Box sx={{ flexGrow: 1, marginTop: 5 }}>
                <Grid container spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               { newServices.map((pd, idx) => (
                <Grid item xs={4} sm={4} md={4} > 
                  <Card sx={{ minWidth: 275, marginTop: 3 }}>
                  <CardMedia
                      component="img"
                      height="194"
                      style={{ width: '100%', height: '150px', margin: '0 auto' }}
                      image={pd?.img}
                      alt="Paella dish"
                  />
                      <CardContent>
                      <Typography variant="h5" component="div">
                          {pd?.name}
                      </Typography>
                      <Typography variant="h5" component="div">
                          <h4>${pd?.price}</h4>
                      </Typography>
                      <Typography variant="body2" color="text.secondary" margin="15px" >
                          {pd?.des}
                      </Typography>
  
                       <Link to={`/services/${pd._id}`}> {" "}
                          <button className="btn btn-success">Order Now</button>
                       </Link>
  
                  </CardContent>
      
                  </Card>
                </Grid>
                  ))}
                      </Grid>
                  </Box>
        </Container>
    );
};

export default HomeCars;