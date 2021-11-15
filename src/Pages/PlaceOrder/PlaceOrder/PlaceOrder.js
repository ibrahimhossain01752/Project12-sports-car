import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useFirebase from "../../../hooks/useFirebase";


const PlaceOrder = () => {
  const { user } = useFirebase();
  const [orders, setOrder] = useState([]);
  const {id} = useParams();
  const {register, handleSubmit, watch, formState: { errors },
  } = useForm();
   

 const history = useHistory();
 
 useEffect(()=>{
  fetch(`https://fathomless-headland-38595.herokuapp.com/services/${id}`)
  .then((res) => res.json())
  .then((result) => {
    setOrder(result[0])
  });
},[id, orders])


  const onSubmit = (data) => {
    data.email = user?.email;
    data.status = 'pending'
    data.img = orders.img;
    data.key = orders.key;
    data.price = orders.price;

    console.log(data)
    fetch("https://fathomless-headland-38595.herokuapp.com/placeorderInsert", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        if(result){
          alert('Oder Successful')
          history.push('/services')
        }
      });
  };

   

  return (
    <div className="container row">
       <div className="col-md-6 col-sm-12">
       <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 275, marginTop: 3 }}>
              <CardMedia
                component="img"
                height="194"
                style={{ width: '100%', height: '150px', margin: '0 auto' }}
                image={orders?.img}
                alt="Paella dish"
               />
                <CardContent>
                     <h2>{orders?.length}</h2>
                    <Typography variant="h5" component="div">
                        {orders?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" margin="15px" >
                       {orders?.des}
                    </Typography>
                </CardContent>

            </Card>
        </Grid>
       </div>
       <div className="col-md-6 col-sm-12">
       <div>
        <h1 className="mt-5 text-center text-success"> Customer Infotmation </h1>
        <div className=" w-75 m-auto mt-5">
          <div className=" ">
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  readOnly
                  defaultValue={user?.displayName}
                  placeholder="Name"
                  className="p-2 m-2 w-100 input-field"
                />
                <input
                  readOnly
                  defaultValue={user?.email}
                  {...register("email")}
                  placeholder="Email"
                  className="p-2 m-2 w-100 input-field"
                />
                <input
                  {...register("phone")}
                  placeholder="Phone Number"
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("city")}
                  placeholder="City"
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("data", { required: true })}
                  placeholder="Date"
                  type="date"
                  className="p-2 m-2 w-100 input-field"
                />
              
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Add"
                  className="btn btn-success w-50"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
       </div>
    </div>
  );
};

export default PlaceOrder;
