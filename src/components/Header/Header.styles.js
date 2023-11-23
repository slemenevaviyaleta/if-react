import {createUseStyles} from "react-jss";

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
    },

    headerLink: {
        color: 'var(--white)',
        textDecoration: 'none',
        fontSize: 24,
        lineHeight: 'var(--unitless-value)',
        display: 'inherit',
        position: 'relative',

        '&:hover:after': {
            content: '""',
            position: 'absolute',
            height: 3,
            backgroundColor: 'var(--yellow)',
            width: 50,
            top: '132%',
            right: '50%',
            transform: 'translate(50%, 50%)',
        },
    },

    headerBtn: {
        background: 'transparent',
        border: 'none',

        '&:last-child': {
            display: 'none',
        },
    },

    'btn-yellow .svg-account': {
        fill: 'var(--yellow)',
    },
}

export const useHeaderStyles = createUseStyles(HeaderStyles, {name: 'Header'})