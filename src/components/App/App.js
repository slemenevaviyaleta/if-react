import React, {useEffect, useState} from 'react';
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
    const [count, setCount] = useState(60);
    const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight});
    const [text, setText] = useState('');
    const [color, setColor] = useState('');
    const [rating, setRating] = useState([]);
    const [userRating, setUserRating] = useState(0);

    document.body.style.backgroundColor = color;



    const handleTextChange = (e) => {
        setText(e.currentTarget.value);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => prevCount - 1);
        }, 1000)
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({width: window.innerWidth, height: window.innerHeight});
        };

        window.addEventListener('resize', handleResize);
    }, []);

    function handleColorChange(color) {
        setColor(color);
    }

    const handleRating = () => {
        setRating([...rating, userRating]);
        setUserRating(0);
    }

    const calculateAverageRating = () => {
        if (rating.length === 0) {
            return 'Нет оценок';
        }

        const sum = rating.reduce((total, rating) => total + rating, 0);
        const average = sum / rating.length;
        return `Средняя оценка: ${average}`;
    }

    return (
        <div>
            <Sprite/>
            <Main setHotels={setHotels}/>
            <HotelsSection hotels={hotels}/>
            <Favorites/>
            <p>Time Left: {count}</p>
            <p> Window Width: {windowSize.width}px, Window Height: {windowSize.height}px
            </p>
            <input type={text} onChange={handleTextChange}></input>
            <p>Input contains {text.length} symbols</p>
            <button onClick={() => handleColorChange('red')}>Red</button>
            <button onClick={() => handleColorChange('blue')}>Blue</button>
            <button onClick={() => handleColorChange('green')}>Green</button>
            <button onClick={() => handleColorChange('yellow')}>Yellow</button>
            <p>Поставьте оценку нашему приложению!</p>
            <input
            type="number"
            min="1"
            max="5"
            value={userRating}
            onChange={(e) => setUserRating(Number(e.target.value))}
            />
            <button onClick={handleRating}>Оценить приложение</button>
            <p>{calculateAverageRating()}</p>
        </div>
    );
}

export default App;
