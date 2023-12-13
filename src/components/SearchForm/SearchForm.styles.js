import {createUseStyles} from "react-jss";
import {constantsStyles} from "../сonstants/Constants.styles";

const SearchFormStyles = {
    topSectionForm: {
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: 20,
        backgroundColor: constantsStyles.white,
        borderRadius: 8,
        maxHeight: 68,
        position: 'relative',
    },


    topSectionFormLabel: {
        display: 'flex',
        color: constantsStyles.white,
        gap: 221,
        marginLeft: 24,
        fontSize: 18,
        lineHeight: constantsStyles.unitlessValue,
        marginBottom: 24,
    },

    formField: {
        flexBasis: '25.5%',
    },

    formFieldDestination: {
        flexGrow: 1,
    },

    formFieldDate: {
        flexBasis: 275,
        position: 'relative',
    },

    formInput: {
        fontSize: 18,
        fontWeight: 400,
        lineHeight: constantsStyles.unitlessValue,
        color: constantsStyles.textColor,
        width: '100%',
        padding: '20px 24px',
        borderRadius: 8,
        border: '3px solid transparent',
        cursor: 'pointer',

        '&:hover': {
            outline: 'none',
            border: `3px solid ${constantsStyles.yellow}`,
        }
    },

    formBtn: {
        flexBasis: 193,
        borderStyle: 'none',
        borderRadius: 8,
        fontSize: 24,
        lineHeight: constantsStyles.unitlessValue,
        fontWeight: 500,
        cursor: 'pointer',
        color: constantsStyles.white,
        backgroundColor: constantsStyles.blue,
        padding: '20px 57px;'
    },

    filterWrapper: {
        backgroundColor: constantsStyles.white,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 259,
        padding: 22,
        borderRadius: 8,
        position: 'absolute',
        left: '65%',
        top: '111%'
    },

    btnsChildren: {
        position: 'relative',
        left: '-3.8%',
    },

    btnsAdults: {
        position: 'relative',
        left: '2.5%',
    },

    btnsRooms: {
        position: 'relative',
        left: '0.5%',
    },

    num: {
        margin: '0px 20px',
    },


    filterBlock: {
        display: 'flex',
        gap: 61,
        alignItems: 'center',
        marginBottom: 12,
    },

    filterSection: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 12,
    },

    filterSpan: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: constantsStyles.unitlessValue,
    },

    filterBtn: {
        borderRadius: 1,
        backgroundColor: constantsStyles.white,
        borderColor: '#CECECE',
        color: '#CECECE',
        fontSize: 18,
        lineHeight: constantsStyles.unitlessValue,
        width: 30,
        height: 30,
        '&:hover': {
            color: constantsStyles.blue,
            borderColor: constantsStyles.blue,
        },
    },

    verticalSelect: {
        display: 'flex',
        marginBottom: 7,
        borderColor: constantsStyles.blue,
        borderWidth: 2,
        padding: 8,
    },

    horizontalCalendar: {
        display: 'flex',
        position: 'fixed',
    },

}

export const useSearchFormStyles = createUseStyles(SearchFormStyles, {name: 'SearchForm'})