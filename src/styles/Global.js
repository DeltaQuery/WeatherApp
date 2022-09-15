import { createGlobalStyle } from "styled-components"
import * as theme from "./Theme.styled"

export const Global = createGlobalStyle`
body {
  background-color: ${({theme}) => theme.colors.pbg };
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    color: ${({theme}) => theme.colors.pcolor };
    transition: background-color 0.5s ease;
  }

  .GoogleMap {
    width: 100%;
    height: 100%;
    min-height: 200px;
  }
`