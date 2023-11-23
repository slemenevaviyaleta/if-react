import React, {Suspense, useState} from 'react';
import {Favorites} from '../Favorites';
import {Main} from '../Main';
import {HotelsSection} from '../AvailableHotels';
import {Sprite} from "../Sprite";
import {Loader} from "../AvailableHotels/Loader";
import {Container} from "../Container";

import {useAppStyles} from "./App.styles";
import {useContainerStyles} from "../Container/Container.styles";

function App() {
    const [hotels, setHotels] = useState([]);
    const classes = useAppStyles();
    const container = useContainerStyles();

    return (
        <div className={classes.root}>
            <Container className={container.container}>
                <Sprite className={classes.AppLogo}/>
                <Main setHotels={setHotels}/>
                <Suspense fallback={<Loader/>}>
                    <HotelsSection hotels={hotels}/>
                </Suspense>
                <Favorites/>
            </Container>
        </div>
);
}

export default App;
