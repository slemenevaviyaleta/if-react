import React from 'react';
import {Header} from '../Header';
import {TopSection} from '../TopSection';
import {Download} from '../Download';
import {Container} from '../Container';
import {useMainStyles} from "./Main.styles";

export const Main = ({setHotels}) => {
    const classes = useMainStyles();
    return (
        <main className={classes.main}>
            <Header/>
            <TopSection setHotels={setHotels}/>
            <Download/>
        </main>
    );
}
