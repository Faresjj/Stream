import React from 'react'
import styles from '../styles/Home.module.scss'
import { Navbar, Container, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';


export default function Menu() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"><a className={styles.navlink}>Browse</a></Nav.Link>
            &nbsp;
            <Nav.Link href="#pricing"><a className={styles.navlink}>Esports</a></Nav.Link>
            &nbsp;
            <Nav.Link href="#pricing"><a className={styles.navlink}>Music</a></Nav.Link>
            &nbsp;
            <NavDropdown title="" id="collasible-nav-dropdown">
              
              <NavDropdown.Item className={styles.navdropdown} href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item className={styles.navdropdown} href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item className={styles.navdropdown} href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className={styles.navdropdown} href="#action/3.4">Separated link</NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
          <Form className="d-flex" style={{marginRight:"150px"}}>
      <FormControl style={{backgroundColor:"black", color:"white", width:"350px"}}
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="primary">Search</Button>
    </Form>
          <Nav>
            <Button bg="primary">Login</Button>
            &nbsp;&nbsp;
            <Button bg="primary">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }