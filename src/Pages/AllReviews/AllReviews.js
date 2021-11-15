import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardMedia, Container, Rating, Typography } from '@mui/material';
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";




const AllReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/allReview")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, [reviews]);
    


    return (
        <Container className="pt-5 pb-5">
          <h1 className="fs-1 text-warning">Customers Reviews {reviews.length} </h1>
        <Box sx={{ flexGrow: 1, marginTop: 5 }}>
            <Grid container spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           { reviews.map((pd, idx) => (
            <Grid item xs={4} sm={4} md={4} > 
              <Card sx={{ minWidth: 275, marginTop: 3 }}>
              <CardMedia
                  component="img"
                  height="194"
                  style={{ width: '90px', height: '90px', borderRadius: '50px', margin: '50px auto' }}
                  image={pd?.img}
              />
                  <CardContent>
                  <Typography variant="h5" component="div">
                      {pd?.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" margin="15px" >
                      {pd?.Comments}
                  </Typography>
                    
                  <Rating
                    value={pd?.rating}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                  />

              </CardContent>
  
              </Card>
            </Grid>
              ))}
                  </Grid>
              </Box>
    </Container>
    );
};

export default AllReviews;