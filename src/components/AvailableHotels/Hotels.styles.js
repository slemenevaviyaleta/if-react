import {createUseStyles} from "react-jss";
import {constantsStyles} from "../сonstants/Constants.styles";

export const hotelsStyles = {
    hotelRow: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
        marginBottom: 80,
    },

    availableHotels: {
        padding: '60px 100px',
    },

    availableHotelsTitle: {
        textAlign: 'center',
        marginBottom: 106,
        fontWeight: 500,
        fontSize: 40,
        lineHeight: `var(${constantsStyles.unitlessValue})`,
        color: `var(${constantsStyles.textColor})`,
    }
}


export const useHotelsStyles = createUseStyles(hotelsStyles, {name: 'Hotels', index: 2});