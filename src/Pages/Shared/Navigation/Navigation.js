import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Box } from '@mui/system';

const Navigation = () => {
    const { user, logout } = useAuth();

    return (
      <div className="">
        <Navbar bg="info" expand="lg">
        <Container>
          <Navbar.Brand style={{fontWeight:"700"}} to="/">Toyoya-Car</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-between" id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{color:"white", fontWeight:"600"}} as={Link} to="/home">Home</Nav.Link>
              <Nav.Link style={{color:"white", fontWeight:"600"}} as={Link} to="/services">Showroom</Nav.Link>
              <Nav.Link style={{color:"white", fontWeight:"600"}} as={Link} to="/blog">Blog</Nav.Link>        
            </Nav>
            <div>
            {user?.email ?
                <Box className="d-flex">
                    <Navbar.Text>
                          <a href="#" className="text-danger text-decoration-none">{user.displayName}</a>
                    </Navbar.Text>
                    <NavLink to="/login" className="text-white text-decoration-none p-2">
                        <Button onClick={logout} color="inherit">Logout</Button>
                    </NavLink>
                    <Nav.Link style={{color:"white", fontWeight:"600"}} as={Link} to="/dashboard">Dashboard</Nav.Link>
               </Box> 
               :
               <NavLink to="/login">
                 <Button className="btn btn-primary">Login</Button>
               </NavLink>      
             }
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
};

export default Navigation;










        //    <AppBar position="fixed">
        //         <Toolbar variant="dense">
        //             <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        //                 <MenuIcon />
        //             </IconButton>
        //             <Typography variant="h6" color="inherit" component="div">
        //                 Sports Car
        //             </Typography>
        //             <NavLink style={{ marginLeft: "160px", color:"white", textDecoration: "none", fontSize: "20px" }} to="/home">Home</NavLink>

        //             <NavLink style={{ marginLeft: "40px", color:"white", textDecoration: "none", fontSize: "20px" }} to="/services">Services</NavLink>

        //             {/* <NavLink style={{ marginLeft: "40px", color:"white", textDecoration: "none", fontSize: "20px" }} to="/placeorder">PlaceOrder</NavLink> */}
        //             <NavLink style={{ marginLeft: "40px", color:"white", textDecoration: "none",  fontSize: "20px" }} to="/purchasing">Purchase</NavLink>

        //             <NavLink style={{ marginLeft: "40px", color:"white", textDecoration: "none",  fontSize: "20px" }} to="/dashboard">Dashboard</NavLink>
        //             {
        //                 user?.email ?

        //                     <NavLink to="/login">
        //                         <Button style={{color:"white"}} onClick={logout} color="inherit">Logout</Button>
        //                     </NavLink> :
        //                     <NavLink to="/login">
        //                         <Button style={{ marginLeft: "20px", color:"white", textDecoration: "none", fontSize: "20px" }} color="inherit">Login</Button>
        //                     </NavLink>
        //             }
        //         </Toolbar>
        //     </AppBar>