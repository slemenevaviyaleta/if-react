import React from 'react';
import { Main } from '../Main';
import { Sprite } from '../Sprite';
import './App.css';
import {Container} from "../Container";
import {Favorites} from "../Favorites";
import {Router} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <>
                <Sprite />
                <Container>
                    <Main />
                    <Favorites />
                </Container>
            </>
        </Router>
    );
};

export default App;


