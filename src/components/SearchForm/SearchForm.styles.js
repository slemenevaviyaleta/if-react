import {createUseStyles} from "react-jss";

const SearchFormStyles = {
    formField: {
        flexBasis: '25.5%',
    },

    formFieldDestination: {
        flexGrow: 1,
    },

    formFieldDate: {
        flexBasis: 259,
        position: 'relative',
    },

    formInput: {
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 'var(--unitless-value)',
        color: 'var(--text-color)',
        width: '100%',
        padding: '20px 24px',
        borderRadius: 8,
        border: '3px solid transparent',
        cursor: 'pointer',

        '&:hover': {
            outline: 'none',
            border: '3px solid var(--yellow)',
        }
    },


    formInputDate: {
        paddingLeft: 22,
    },

    formBtn: {
        flexBasis: 193,
        borderStyle: 'none',
        borderRadius: 8,
        fontSize: 24,
        lineHeight: 'var(--unitless-value)',
        fontWeight: 500,
        cursor: 'pointer',
        color: 'var(--white)',
        backgroundColor: 'var(--blue)',
        padding: '20px 57px;'
    },

    reactDatepicker: {
        position: 'absolute',
        top: '100%',
        left: 0,
    }
}

export const useSearchFormStyles = createUseStyles(SearchFormStyles, {name: 'SearchForm'})