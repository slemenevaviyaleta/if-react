import React, {useState} from 'react';
import {Favorites} from '../Favorites';
import {Main} from '../Main';
import {HotelsSection} from '../AvailableHotels';
import {Sprite} from "../Sprite";
import '../Sprite/Sprite.css'
import '../Favorites/Favorites.css';
import '../TopSection/TopSection.css';
import '../Main/Main.css';
import '../Header/Header.css';
import '../SearchForm/SearchForm.css';
import '../Download/Download.css';
import '../Container/Container.css';
import '../AvailableHotels/AvailableHotels.css';
import './App.css';

function App() {
    const [hotels, setHotels] = useState([]);
    return (
        <div>
            <Sprite/>
            <Main setHotels={setHotels}/>
            <HotelsSection hotels={hotels}/>
            <Favorites/>
        </div>
    );
}
export default App;
