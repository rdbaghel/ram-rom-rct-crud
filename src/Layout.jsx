import { Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Layout=()=>{
    return(
        <>
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Cybrom Pvt Ltd.</Navbar.Brand>
          <Nav>
            <Nav.Link  as={Link} to="home">Home |</Nav.Link>
            <Nav.Link  as={Link} to="insert">Insert |</Nav.Link>
            <Nav.Link  as={Link} to="display">Display |</Nav.Link>
            <Nav.Link  as={Link} to="search">Search |</Nav.Link>
            <Nav.Link  as={Link} to="update">Update |</Nav.Link>
            <Nav.Link  as={Link} to="contact">Contact |</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        
   <div id="wrapper">

         <Outlet/>

   </div>


        <hr size="4" color="blue"/>
        www.studentmanagementsystem.com 2024
      
       . Help

       . Contact Us
        </>
    )
}


export default Layout;