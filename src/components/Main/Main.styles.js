import {createUseStyles} from "react-jss";

const MainStyles = {
    main: {
        backgroundImage: `url('./background.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingTop: 51,
        paddingBottom: 'var(--container-pad-btm-top)',
    },
};

export const useMainStyles = createUseStyles(MainStyles, {name: 'Main'})