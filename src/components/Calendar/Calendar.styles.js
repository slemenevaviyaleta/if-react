import { createUseStyles } from 'react-jss';
import { animationColor } from '../../index.styles';

export const useCalendarStyles = createUseStyles({
  input: {
    border: 'none',
    width: '100%',
    height: 58,
    font: {
      size: 18,
      family: 'Roboto, sans-serif',
    },
    borderRadius: 8,
    '&:focus-visible': {
      outline: `3px solid ${animationColor}`,
    },
    '& .react-datepicker__input-container': {
      width: '100%',
    },
    reactDatepicker: {
      display: 'flex',
      '& input-container > input': {
        textAlign: 'center',
      },
    },
  },
});
