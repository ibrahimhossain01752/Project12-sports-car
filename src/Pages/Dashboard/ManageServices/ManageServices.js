import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useFirebase from "../../../hooks/useFirebase";
import "./ManageServices.css";

const ManageService = () => {


  const { user } = useFirebase();
  const [orders, setOrders] = useState([]);
  const [IsDelete, setIsDelete] = useState(false);

 useEffect(()=>{
     fetch(`http://localhost:5000/dashboard/manageServices`)
     .then(res=> res.json())
     .then(data=>{
      setOrders(data)
     })
 },[orders, IsDelete])




  const Delete = (id) => {
    console.log(id)
    const confirmDelete = "Are You Sure To Delete this Orders??"
    if(window.confirm(confirmDelete)){
       fetch(`http://localhost:5000/dashboard/manageServices/deleted/${id}`, {
           method: 'DELETE',
        }).then(res => res.json())
        .then(data=> {
           console.log(data)
           if(data.deletedCount){
               setIsDelete(true);
               alert('successfully Deleted')
           }
        })
    } 
  }
 



  return (
    <div class="container mt-5 pt-5">
      <h1>Manage Services  {orders.length}</h1>
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
               <button onClick={()=>Delete(pd?._id)} className="btn bg-info p-2">Delete</button>          
              </td>        
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageService;
