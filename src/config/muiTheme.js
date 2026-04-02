import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#3e66d7',
        },
        secondary: {
            main: '#eef0f3',
        },
        success: {
            main: '#00aa00',
        },
        error: {
            main: '#cc0000',
        },
        info: {
            main: '#0095c2',
        },
        background: {
            default: '#f5f6f8',
            paper: '#ffffff',
        },
        text: {
            primary: '#000000',
            secondary: '#9ea2aa',
        },
    },

    typography: {
        fontFamily: 'roboto, sans-serif',
        h1: { fontSize: '36px', fontFamily: 'roboto' },
        h2: { fontSize: '24px', fontFamily: 'roboto' },
        h3: { fontSize: '18px', fontFamily: 'roboto' },
        h4: { fontSize: '16px', fontFamily: 'roboto' },
        h5: { fontSize: '14px', fontFamily: 'roboto' },
        h6: { fontSize: '12px', fontFamily: 'roboto' },
    },

    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xl2: 1536
        },
    },

    components: {
        MuiTextField: {
            defaultProps: {
                variant: 'filled',
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fontFamily: 'roboto, sans-serif',
                    backgroundColor: 'var(--color-muted)',
                    borderRadius: "10px",

                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'var(--color-muted-text)',
                    },

                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'var(--color-primary-text)',
                    },

                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'var(--color-primary)',
                    },
                },

                input: {
                    padding: '12px',
                    borderRadius: "10px",
                },
            },
        },

        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: 'var(--color-bg)',
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'roboto, sans-serif',
                },
                
                outlined: {
                    borderRadius: '8px',
                    borderColor: 'var(--color-muted-text)',
                    color: 'var(--color-muted-text)',

                    '&:hover': {
                        borderColor: 'var(--color-primary)',
                        color: 'var(--color-primary)',
                    },
                },
            },
        },
    },
});

export default theme;