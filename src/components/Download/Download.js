import React from 'react';
import {useDownloadStyles} from "./Download.styles";
import {useSpriteStyles} from "../Sprite/Sprite.styles";

export const Download = () => {
    const classes = useDownloadStyles();
    const svg = useSpriteStyles();

    return (
        <section className={classes.download}>
            <div className={classes.downloadGoogle}>
                <a href="#!" className={classes.downloadButton}>
                    <svg className={svg.svgGoogle} xmlns="http://www.w3.org/2000/svg">
                        <use href="#google" />
                    </svg>
                </a>
            </div>
            <div className={classes.downloadApple}>
                <a href="#!" className={classes.downloadButton}>
                    <svg className={svg.svgApple} xmlns="http://www.w3.org/2000/svg">
                        <use href="#apple" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
