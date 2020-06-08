// wrap components with same style
import React from 'react';
import { Container } from 'react-bootstrap';

// takes in props, render container element
export const Layout = (props) => (
    <Container>
        {props.children}
    </Container>
)