import React, { useEffect, useState } from 'react';
import { FavoritesCarousel } from './FavoritesCarousel';
import { getPosts } from "../services/hotels";
import { Button } from "../Button/Button";
import { Container } from "../Container";
import {useContainerStyles} from "../Container/Container.styles";

export function Favorites() {
    const [posts, setPosts] = useState([]);
    const container    =   useContainerStyles();

    useEffect(() => {
        const fetchData = async () => {
            const postsData = await getPosts();
            setPosts(postsData);
        };
        fetchData();
    }, []);

    return (
        <section className="homes">
            <Container className={container.container}>
                <h2 className="homes__title text__center title">
                    Homes guests loves
                </h2>
                <FavoritesCarousel data={posts} className="homes__variants" />
                <Button className="homes__arrow--ellipse">
                    <div className="homes__arrow--pike"></div>
                </Button>
            </Container>
        </section>
    );
}

