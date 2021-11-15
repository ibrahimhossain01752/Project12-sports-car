// import React from 'react';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import CardMedia from '@mui/material/CardMedia';
// import { Card, Grid } from '@mui/material';
// import { Link, useParams } from 'react-router-dom';

// const Service = ({ service }) => {
//     const { name, des, img, key, _id } = service;
//     // console.log(key)
//    const {id} = useParams()
//    console.log(id);

//   const AddToCard = (key) => {
//       console.log(key)
//   }





//     return (
//         <Grid item xs={4} sm={4} md={4} >
//             <CardMedia
//                 component="img"
//                 height="194"
//                 style={{ width: '100%', height: '150px', margin: '0 auto' }}
//                 image={img}
//                 alt="Paella dish"
//             />
//             <Card sx={{ minWidth: 275, marginTop: 3 }}>
//                 <CardContent>

//                     <Typography variant="h5" component="div">
//                         {name}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" margin="15px" >
//                         {des}
//                     </Typography>

//                     <Link to={`/services/${_id}`}> {" "}
//                       <button className="btn btn-success">Order Now</button>
//                     </Link>

//                 </CardContent>

//             </Card>
//         </Grid>
//     );
// };

// export default Service;