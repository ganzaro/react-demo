import React from "react";

import { Container, Navbar, NavDropdown, Nav, Button, FormControl, Form } from "react-bootstrap";


export const Header2 = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            <br />

        </>
    );
};

// export default Header

// const Header = () => {
//     return (
//       // <Container fluid>
//         // <Row>
//         <NavBar>
//           <NavContainer>
//             {/* <a href="/"><Icon src={Logo} alt={`${name} Logo`} /></a> */}
//             <a href="/"><Icon src={Logo} /></a>
//             <Heading>AFROBLOCKS</Heading>
//           </NavContainer>

//           <LinkSection>
//             {/* <span>Tailwind CSS</span> */}
//             {/* <NavLink><a href="#">Blog</a></NavLink> */}
//             <NavLink><Link to="/blog">Blog</Link></NavLink>
//             {/* <NavLink><Link to="/eventz">Events</Link></NavLink> */}
//             <NavLink><Link to="/about">About</Link></NavLink>
//             <NavLink><Link to="/contact">Contact</Link></NavLink>

//           </LinkSection>

//         </NavBar>
//         // </Row>
//       // </Container>
//     );
//   };
