import {createUseStyles} from "react-jss";

const appStyles = {
    '@import': 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap',

    global: {
        '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            textDecoration: 'none',
            listStyleType: 'none',
        },
    },

    root: {
        '--col-width': 'calc(100% / 14)',
        '--white': '#fff',
        '--yellow': '#f5bd41',
        '--dark-blue': '#10367c',
        '--blue': '#3077c6',
        '--text-color': '#383838',
        '--secondary-text': '#bfbfbf',
        '--background-color': '#eaf0f9',
        '--circle-color': '#f3f3f4',
        '--unitless-value': 1.2,
        '--container-pad-btm-top': 120,
        '--container-pad-lt-rt': 104,
    },

    body: {
        fontFamily: 'Roboto, sans-serif',
        height: '100%',
    },

    colLg1: {
        width: 'var(--col-width)',
    },

    colLg2: {
        width: 'calc(var(--col-width) * 2)',
    },

    colLg3: {
        width: 'calc(var(--col-width) * 3)',
    },

    colLg4: {
        width: 'calc(var(--col-width) * 4)',
    },

    colLg5: {
        width: 'calc(var(--col-width) * 5)',
    },

    colLg6: {
        width: '50%',
    },

    colLg7: {
        width: 'calc(var(--col-width) * 7)',
    },

    colLg8: {
        width: 'calc(var(--col-width) * 8)',
    },

    colLg9: {
        width: 'calc(var(--col-width) * 9)',
    },

    colLg10: {
        width: 'calc(var(--col-width) * 10)',
    },

    colLg11: {
        width: 'calc(var(--col-width) * 11)',
    },

    colLg12: {
        width: 'calc(var(--col-width) * 12)',
    },

    colLg13: {
        width: 'calc(var(--col-width) * 13)',
    },

    colLg14: {
        width: '100%',
    },

    App: {
        textAlign: 'center',
    },

    AppLogo: {
        height: '40vmin',
        pointerEvents: 'none',
    },

    '@media (prefers-reduced-motion: no-preference)': {
        AppLogo: {
            animation: 'App-logo-spin infinite 20s linear',
        }
    },

    AppHeader: {
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
    },

    AppLink: {
        color: '#61dafb',
    },

    '@keyframes App-logo-spin': {
        from: {
            transform: 'rotate(0deg)',
        },
        to: {
            transform: 'rotate(360deg)',
        }
    }
};

export const useAppStyles = createUseStyles(appStyles, {name: 'App'});