import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useFirebase from "../../../hooks/useFirebase";
import './ManageOrder.css';

const ManageOrder = () => {

    const { user } = useFirebase();
    const [orders, setOrders] = useState([]);
    const [IsDelete, setIsDelete] = useState(false);

   useEffect(()=>{
       fetch(`https://fathomless-headland-38595.herokuapp.com/dashboard/manageOrder`)
       .then(res=> res.json())
       .then(data=>{
        setOrders(data)
       })
   },[orders, IsDelete])



   const Approved = (id) => {
       console.log(id)
       fetch(`https://fathomless-headland-38595.herokuapp.com/dashboard/manageOrder/Approved/${id}`, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
       })  
       .then(res=> res.json())
       .then(data => {
         if(data.modifiedCount){
            let newOrder = [];
            orders.forEach(order => {
               if(order.id === id){
                 order.status = 'Approved';
               }
               newOrder.push(order); 
            })
            setOrders(newOrder);
          alert('Approved')
         }
       })

   }


 

   const Delete = (id) => {
     console.log(id)
     const confirmDelete = "Are You Sure To this Orders!"
     if(window.confirm(confirmDelete)){
        fetch(`https://fathomless-headland-38595.herokuapp.com/dashboard/manageOrder/deleted/${id}`, {
            method: 'DELETE',
         }).then(res => res.json())
         .then(data=> {
            console.log(data)
            if(data.deletedCount){
                setIsDelete(true);
            }
            alert('successfully Deleted')
         })
     } 
   }
  






    return (
     <div className="mt-5 pt-5 container">
       <h1>All orders {orders.length}</h1>
       <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Product ID</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {orders?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td><img src={pd?.img} alt="fsd" className="w-25 h-25"/> </td>
              <td>{pd?.name}</td>
              <td>{pd?.email}</td>
              <td>{pd?.phone}</td>
              <td>{pd?.key}</td>
              <td>{pd?.status}</td>
              <td>
                 <button onClick={()=>Delete(pd?._id)} className="btn bg-danger p-2">Delete</button>          
                 <button onClick={()=>Approved(pd?._id)} className="btn bg-success p-2">Approved</button>    
              </td>        
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
    );
};

export default ManageOrder;