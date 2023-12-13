import {createUseStyles} from "react-jss";
import {constantsStyles} from "../сonstants/Constants.styles";

const MainStyles = {
    main: {
        backgroundImage: 'url(' + './background.png' + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingTop: 51,
        paddingBottom: constantsStyles.containerPadBtmTop,
        zIndex: -1,
    },
};

export const useMainStyles = createUseStyles(MainStyles, {name: 'Main'})