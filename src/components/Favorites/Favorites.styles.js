import {createUseStyles} from "react-jss";

const FavoritesStyles = {
    favorites: {
        backgroundColor: 'var(--background-color)',
        padding: 'var(--container-pad-btm-top) var(--container-pad-lt-rt)',
        position: 'relative',
    },

    favoritesTitle: {
        textAlign: 'center',
        marginBottom: 106,
        fontWeight: 500,
        fontSize: 40,
        lineHeight: 'var(--unitless-value)',
    },

    favoritesRow: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateRows: '1fr',
        gap: 16,
    },

    favoritesWrapper: {
        position: 'relative',
    },

    favoritesCard: {
        gridColumn: 'span 3',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        cursor: 'pointer',
        position: 'relative',

        '&:hover': {
            '.favoritesImg': {
                transform: 'scale(1.04)',
            }
        }
    },

    favoritesLink: {
        textDecoration: 'none',
        color: 'var(--blue)',
        fontWeight: 400,
        fontSize: 24,
        lineHeight: 'var(--unitless-value)',
    },

    favoritesImg: {
        transition: 'all 0.3s ease-in-out 0.1s;',
    },

    favoritesCardLink: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: '100%',
    },

    favoritesCaption: {
        color: 'var(--secondary-text)',
        fontWeight: 400,
        fontSize: 24,
        lineHeight: 'var(--unitless-value)',
    },

    favoritesBtnEllipse: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: 'var(--white)',
        borderRadius: '50%',
        filter: 'drop-shadow(0 4px 4px rgb(0 0 0 / 25%))',
        position: 'absolute',
        top: '50%',
        right: 75,
        border: 'none',
    },

    textContainer: {
        display: 'contents',
    },

    arrowBtn: {
        width: 10,
        marginLeft: 2,
    }
}

export const useFavoriteStyles = createUseStyles(FavoritesStyles, {name: 'Favorite'})