import {createUseStyles} from 'react-jss';

const containerStyles = {
    container: {
        maxWidth: 1230,
        width: '100%',
        margin: '0 auto',
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 120,
}
}

export const useContainerStyles = createUseStyles(containerStyles, {name: 'Container'});