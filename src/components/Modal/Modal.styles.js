import {createUseStyles} from "react-jss";

const ModalStyles = {
    modal: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'var(--white)',
        padding: '36px 40px',
        borderRadius: 8,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        maxWidth: 400,
        width: '100%',
        color: 'var(--text-color)',
        maxHeight: 364,
        height: '100%',
    },

    modalOverlay: {
        content: '',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `url('./background.png') center center/cover`,
        zIndex: '-1',
    },

    modalClose: {
        position: 'absolute',
        top: 10,
        right: 10,
        fontSize: 18,
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        color: '#fff',
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
        borderColor: 'var(--secondary-text)',
    },

    email: {
        marginBottom: 16,
    },

    modalSubtitle: {
        fontSize: 16,
        fontWeight: 300,
        marginBottom: 8,
        lineHeight: 19,
    },

    modalBtn: {
        width: '100%',
        backgroundColor: 'var(--blue)',
        border: 'none',
        borderRadius: 8,
        color: 'var(--white)',
        padding: '12px 121px',
        fontWeight: 500,
        fontSize: 24,
        marginTop: 24,
    }
}

export const useModalStyles = createUseStyles(ModalStyles, {name: 'Modal'})