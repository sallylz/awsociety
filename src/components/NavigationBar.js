import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

// create a style component that wraps eerything
const Styles = styled.div`
    .navbar {
        background-color: #222;

    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        {/* large */}
        <Navbar expand="lg">
            <Navbar.Brand href="/"> Find and adopt your perfect pet today! </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {/* margain left auto */}
                <Nav className="ml-auto">
                    {/* <Nav.Item><Nav.Link href="/awsociety">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/awsociety/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/awsociety/contact">Contact</Nav.Link></Nav.Item> */}
                    <menuitem href="/awsociety">Home</menuitem>
                    <menuitem href="/awsociety/about">About</menuitem>
                    <menuitem href="/awsociety/contact">About</menuitem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)