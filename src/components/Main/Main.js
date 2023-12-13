import React, {Suspense, useRef, useState} from 'react';
import {Header} from '../Header';
import {Form} from '../SearchForm';
import {Download} from '../Download';
import {Container} from '../Container';
import './Main.css';
import {useContainerStyles} from "../Container/Container.styles";

export const Main = () => {
    const [results, setResults] = useState([]);
    const [visible, setVisible] = useState(false);
    const [searchClicked, setSearchClicked] = useState(false);

    const availableHotelsRef = useRef(null);

    const handleSearch = (results) => {
        setResults(results);
        setVisible(true);
        setSearchClicked(true);

        availableHotelsRef.current.scrollIntoView({behavior: 'smooth'});
    };

    const container = useContainerStyles();

    const AvailableHotels = React.lazy(
        () =>
            new Promise((resolve) =>
                setTimeout(() => resolve(import('../AvailableHotels/Hotels')), 1000),
            ),
    );

    const loaderGifUrl =
        'https://media2.giphy.com/media/jAYUbVXgESSti/giphy.gif?cid=ecf05e47iif6d8x0atk8fantjmfqznd1jds7y53o1p6674ef&ep=v1_gifs_search&rid=giphy.gif&ct=g';



    return (
        <>
            <main className="main">
                <Container className={container.container}>
                    <Header/>
                    <h1 className="topSectionTitle">
                        Discover stays
                        <span className="newLine">to live, work or just relax</span>
                    </h1>
                    <Form setResults={handleSearch}/>
                    <Download/>
                </Container>
            </main>

            {searchClicked && (
                <Suspense
                    fallback={
                        <img
                            src={loaderGifUrl}
                            alt="Loading"
                            style={{width: '100%', height: 'auto'}}
                        />
                    }
                >
                    <section
                        ref={availableHotelsRef}
                        className={`homes available ${visible ? '_visible' : ''}`}
                    >
                        <Container className={container.container}>
                            <h2 className="homes__title text__center title">
                                Available hotels
                            </h2>
                            <AvailableHotels className="available__hotels" hotels={results}/>
                        </Container>
                    </section>
                </Suspense>
            )}
        </>
    );
};


