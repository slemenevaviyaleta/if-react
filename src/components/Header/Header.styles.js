import {createUseStyles} from "react-jss";
import {constantsStyles} from "../сonstants/Constants.styles";

const HeaderStyles = {
    header: {
        position: 'relative',
        zIndex: 1,
    },

    headerNavbar: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 197,
    },

    headerMenu: {
        display: 'flex',
        gap: 48,
        alignItems: 'center',
    },

    headerMenuLinks: {
        display: 'flex',
        gap: 24,
    },

    headerMenuButtons: {
        display: 'flex',
        gap: 24,
        border: 'none',
    },

    headerLink: {
        color: constantsStyles.white,
        textDecoration: 'none',
        fontSize: 24,
        lineHeight: constantsStyles.unitlessValue,
        display: 'inherit',
        position: 'relative',

        '&:hover:after': {
            content: '""',
            position: 'absolute',
            height: 3,
            backgroundColor: constantsStyles.yellow,
            width: 50,
            top: '132%',
            right: '50%',
            transform: 'translate(50%, 50%)',
        },
    },

    headerBtn: {
        border: 'none',
        backgroundColor: 'transparent',

        '&:last-child': {
            display: 'none',
        },
    },
}

export const useHeaderStyles = createUseStyles(HeaderStyles, {name: 'Header'})