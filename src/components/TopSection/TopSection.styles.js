import {createUseStyles} from "react-jss";

const TopSectionStyles = {
    topSection: {
        marginBottom: 120,
    },

    topSectionTitle: {
        marginBottom: 145,
        fontWeight: 500,
        fontSize: 50,
        lineHeight: 'var(--unitless-value)',
        color: 'var(--white)',
        whiteSpace: 'pre-line',
    },

    newLine: {
        display: 'block',
    },

    topSectionFormLabel: {
        display: 'flex',
        color: 'var(--white)',
        gap: 221,
        marginLeft: 24,
        fontSize: 18,
        lineHeight: 'var(--unitless-value)',
        marginBottom: 24,
    },

    topSectionForm: {
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: 20,
        backgroundColor: 'var(--white)',
        borderRadius: 8,
        maxHeight: 68,
    }
}

export const useTopSectionStyles = createUseStyles(TopSectionStyles, {name: 'TopSection'})