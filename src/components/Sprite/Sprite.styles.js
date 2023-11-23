import {createUseStyles} from "react-jss";

const SpriteStyles = {
    svgSprite: {
        position: 'absolute',
        visibility: 'hidden',
        width: 0,
        height: 0,
    },

    svgLogo: {
        width: 205,
        height: 40,
        fill: 'var(--blue)',
    },

    svgNight: {
        width: 30,
        height: 40,
        fill: 'var(--white)',
    },

    svgAccount: {
        height: 40,
        width: 40,
        fill: 'var(--white)',
    },

    svgGoogle: {
        width: 140,
        height: 40,
    },

    svgApple: {
        width: 125,
        height: 40,
    },

    svgHeadphones: {
        width: 75,
        height: 92,
    },

    svgMessages: {
        width: 84,
        height: 84,
    },

    svgComputer: {
        width: 100,
        height: 67,
    },

    svgLike: {
        width: 92,
        height: 84,
    }
}

export const useSpriteStyles = createUseStyles(SpriteStyles, {name: 'Sprite'})