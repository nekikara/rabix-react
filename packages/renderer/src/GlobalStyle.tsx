import { createGlobalStyle } from 'styled-components'

const textColor = '#eee'
const bodyBg = '#303030'
const fontSizeBase = '13px'

export const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    color: ${textColor};
    background: ${bodyBg};
    font-size: ${fontSizeBase};
  }
`
