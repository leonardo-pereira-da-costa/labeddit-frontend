import styled, { createGlobalStyle } from 'styled-components';
import Router from './routes/Router';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html {
    font-family: 'IBM Plex Sans', sans-serif;
  }

  button, input {
    font-family: 'Noto Sans', sans-serif;
  }

  #root {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E5E5E5;
  }
`

export const AppContainer = styled.div`
  background-color: #FAFAFA;
  width: 428px;
  max-width: 100vw;
  height: 926px;
  max-height: 100vh;
`

export default function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Router />
    </AppContainer>
  )
}