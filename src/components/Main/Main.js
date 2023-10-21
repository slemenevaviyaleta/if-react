import React from 'react';
import { Header } from '../Header';
import { TopSection } from '../TopSection';
import { Download } from '../Download';
import { Container } from '../Container';
import './Main.css';

export const Main = ({ setHotels }) => {
    return (
        <main className="main">
            <Container>
                <Header />
                <TopSection setHotels={setHotels} />
                <Download />
            </Container>
        </main>
    );
}
