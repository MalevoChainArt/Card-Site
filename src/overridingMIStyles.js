import {createMuiTheme} from '@material-ui/core/styles';

const yellowHot = '#ff5220';
const black = '#030303';
const white = '#fefefe';
const fontGeneral = 'Source Code Pro';
const font = 'Muller';

export const theme=createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: `${fontGeneral}, sans-serif`
    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: yellowHot,
                '&$focused': {
                    color: yellowHot
                }
            }
        },
        MuiInputBase: {
            input: {
                borderBottom: `1px solid ${white}`,
                color: white,
            }
        },
        MuiInput: {
            underline: {
                '&:after': {
                    borderBottom: `1px solid ${white}`
                }
            }
        },
        MuiButtonBase: {
            root: {
                border: `1px solid ${white}`,
                color: white,
                '&:hover': {
                    border: `1px solid ${yellowHot}`,
                    color: yellowHot,
                }
            },
        },
        MuiButton: {
            root: {
                borderRadius: '0px',
            }
        },
        MuiFormLabel: {
            root: {
                fontSize: '1.5rem'
            }
        }
    }
});
