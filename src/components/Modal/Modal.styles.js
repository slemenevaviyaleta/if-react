import {createUseStyles} from "react-jss";
import {constantsStyles} from "../сonstants/Constants.styles";

const ModalStyles = {
    modal: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: constantsStyles.white,
        padding: '36px 40px',
        borderRadius: 8,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        maxWidth: 400,
        width: '100%',
        color: constantsStyles.textColor,
        maxHeight: 364,
    },

    modalOverlay: {
        content: '',
        position: 'fixed',
        top: 0,
        left: 0,
        background: 'url(' + './background.png' + ')',
        zIndex: -1,
        width: '100%',
        height: '100%',
    },

    modalTitle: {
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 40,
    },

    modalInput: {
        width: '100%',
        height: 41,
        borderRadius: 8,
        borderColor: constantsStyles.secondaryText,
    },

    email: {
        marginBottom: 16,
    },

    modalSubtitle: {
        fontSize: 16,
        fontWeight: 300,
        marginBottom: 8,
        lineHeight: constantsStyles.unitlessValue,
    },

    modalBtn: {
        width: '100%',
        backgroundColor: constantsStyles.blue,
        border: 'none',
        borderRadius: 8,
        color: constantsStyles.white,
        padding: '12px 121px',
        fontWeight: 500,
        fontSize: 24,
        marginTop: 24,
    }
}

export const useModalStyles = createUseStyles(ModalStyles, {name: 'Modal'})