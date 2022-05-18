import React from "react";
import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

const MainNavigation = () => {
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="light"
                variant="light"
                className="bg-white fixed-top"
            >
                <Container>
                    <Navbar.Brand>
                        <Link to="/">
                            <Image
                                className="logo-img"
                                src="images/airtel-logo.svg"
                                alt="logo"
                                fluid
                            />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown
                                title="PREPAID"
                                id="collasible-nav-dropdown"
                                className="dropdown-head"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Recharge
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    New Prepaid Sim
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    View Plans
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    International Roaming
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">
                                    Switch Prepaid to Postpaid
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">
                                    Post to Airtel Prepaid
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="POSTPAID"
                                id="collasible-nav-dropdown"
                                className="dropdown-head"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Pay Bill
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Buy New Connection
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    View Plans
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    Switch Prepaid to Postpaid
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">
                                    Port to Airtel
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">
                                    Free Sim Delivery
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="BROADBAND"
                                id="collasible-nav-dropdown"
                                className="dropdown-head"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Pay Bill / Recharge
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Buy New Connection
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    View Plans
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="DTH"
                                id="collasible-nav-dropdown"
                                className="dropdown-head"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Recharge
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Buy New DTH Connection
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    View Plans
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    Upgrade Box
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">
                                    Xstream
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">
                                    Buy Second DTH Connection
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="BANK"
                                id="collasible-nav-dropdown"
                                className="dropdown-head"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    View Account
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Get New Account
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Add Money
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    Know More
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="AIRTEL BLACK"
                                id="collasible-nav-dropdown"
                                className="dropdown-head"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Pay Bill
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    View Plans
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="HELP"
                                id="collasible-nav-dropdown"
                                className="dropdown-head"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    Contact Us
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Link to="/getapp" className="nav-link-sec">
                                <i class="fa-solid fa-mobile-screen center"></i>
                                <p className="nav-text">Get App</p>
                            </Link>
                            <Link to="/#!" className="nav-link-sec">
                                <i class="fa-solid fa-store center"></i>
                                <p className="nav-text">Store</p>
                            </Link>
                            <Link to="/#!" className="nav-link-sec">
                                <i class="fa-solid fa-user center"></i>
                                <p className="nav-text">Login</p>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Divider />
        </>
    );
};
export default MainNavigation;
