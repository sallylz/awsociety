import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import animal from '../assets/animal.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${animal}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

// create a functional component
export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome to Animal Welfare Society</h1>
                <p> Learn more about our animals and submit an application to adopt! </p>
            </Container>
        </Jumbo>
    </Styles>
)