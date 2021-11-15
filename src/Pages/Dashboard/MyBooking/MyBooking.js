import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useFirebase from "../../../hooks/useFirebase";

const MyBooking = () => {
    const { user } = useFirebase();
    const [orders, setOrders] = useState([]);
    const [IsDelete, setIsDelete] = useState(false);


  useEffect(() => {
  fetch(`https://fathomless-headland-38595.herokuapp.com/dashboard/myBooking?email=${user?.email}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    setOrders(data)
  })
 }, [user?.email, IsDelete]);




 const Delete = (id) => {
  console.log(id)
  const confirmDelete = "Are You Sure To this Orders!"
  if(window.confirm(confirmDelete)){
     fetch(`https://fathomless-headland-38595.herokuapp.com/dashboard/myBooking/deleted/${id}`, {
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
   <div className="container pt-5 pb-t">
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
              <button onClick={()=>Delete(pd?._id)} className="btn bg-danger p-2">Delete</button>          
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
    );
};

export default MyBooking;