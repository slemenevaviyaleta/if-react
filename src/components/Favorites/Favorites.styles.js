import {createUseStyles} from "react-jss";
import {constantsStyles} from "../сonstants/Constants.styles";

const FavoritesStyles = {
    favorites: {
        backgroundColor: constantsStyles.backgroundColor,
        padding: `${constantsStyles.containerPadBtmTop}px ${constantsStyles.containerPadLtRt}px`,
        position: 'relative',
    },

    favoritesTitle: {
        textAlign: 'center',
        marginBottom: 106,
        fontWeight: 500,
        fontSize: 40,
        lineHeight: constantsStyles.unitlessValue,
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
        color: constantsStyles.blue,
        fontWeight: 400,
        fontSize: 24,
        lineHeight: constantsStyles.unitlessValue,
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
        color: constantsStyles.secondaryText,
        fontWeight: 400,
        fontSize: 24,
        lineHeight: constantsStyles.unitlessValue,
    },

    favoritesBtnEllipse: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: constantsStyles.white,
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