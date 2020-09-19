export const theme = {
    colors: {
        primary: 'rgb(61, 72, 90)',
        secondary: 'rgba(61, 72, 90, 0.8)',
        accent: '#e63786',
        // accent: '#2db34a',

        white: 'white',
        background: 'white',

        primaryDark: 'rgba(255, 255, 255, 0.5)'
    },
    fontFamilies: {
        regular: '"Poppins", sans-serif',
        headings: '"Merienda", cursive',
    },

    fontSizes: {
        small: '.7rem',
        base: '1rem',
        medium: '1.1rem',
        large: '1.2rem',
        xLarge: '1.3rem',
        xxLarge: '1.4px',
    },

    breakpoints: {
        xs: '22em',
        sm: '48em',
        md: '64em',
        lg: '85.375em',
        xl: '120em',
        xxl: '160em'
    },

    media: {
        xsmall: `(min-width: 22em)`,
        small: `(min-width: 48em)`,
        medium: `(min-width: 64em)`,
        large: `(min-width: 85.375em)`,
        xlarge: `(min-width: 120em)`,
        xxlarge: `(min-width: 160em)`,
        retina: "(-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi)",
    },

    transitions: {
        default: '0.2s ease-in-out',
    },

    filters : {
        filterToAccent: 'brightness(0) saturate(100%) invert(33%) sepia(75%) saturate(2571%) hue-rotate(312deg) brightness(93%) contrast(92%)', //accent: e63786
    }


}