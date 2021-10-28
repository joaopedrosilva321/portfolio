import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Plusjakartadisplay";
    src: url("https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a0e155c65d49_PlusJakartaDisplay-Bold.otf")
      format("opentype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Plusjakartadisplay";
    src: url("https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a0ad9fc65d4d_PlusJakartaDisplay-Regular.otf")
      format("opentype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Plusjakartadisplay";
    src: url("https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a08580c65d4c_PlusJakartaDisplay-Medium.otf")
      format("opentype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Plusjakartadisplay";
    src: url("https://assets.website-files.com/5f99409a4f44a04dedc65d19/5f99409a4f44a008e6c65d4b_PlusJakartaDisplay-Light.otf")
      format("opentype");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  #__next {
    padding: 0 24px;
    max-width: 1058px;
    margin: 0 auto;
    @media only screen and (min-width: 920px) {
        & {
            padding: 0;
        }
    }
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Plusjakartadisplay, sans-serif;
    text-rendering: optimizeLegibility;
    background: ${props => props.theme.colorsDark.background.Primary};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  li{
    list-style: none;
  }
`

const theme = {
  colors: {
    background: {
      // Primary: '#111111',
      // Secondary: '#333333',
      // Tertiary: '#4F4F4F',
      // Quaternary: '#828282',
      // Quinary: '#BDBDBD',
    },
    fonts: {
      Primary: '#0d0e10',
      Secondary: '#333',
      Tertiary: '#3f4451',
    }
  },

  colorsDark: {
    // colors:  {
    //   Primary: #0070f3
    // }
    background: {
      Primary: '#111111',
      Secondary: '#BDBDBD',
      Tertiary: '#4F4F4F',
      Quaternary: '#828282',
      Quinary: '#333333',
    },
    fonts: {
      Primary: '#FFFFFF',
      Secondary: '#F2F2F2',
      Tertiary: '#E0E0E0',
      Quaternary: '#BDBDBD',
    }
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
