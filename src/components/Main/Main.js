import React from 'react';
import { Header } from '../Header';
import { TopSection } from '../TopSection';
import { Download } from '../Download';
import { Container } from '../Container';
import './Main.css';

export const Main = () => {
    return (
        <main className="main">
            <Container>
                <Header />
                <TopSection />
                <Download />
            </Container>
        </main>
    );
}
