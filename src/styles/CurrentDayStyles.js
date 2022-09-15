import styled from "styled-components"
import px2vw from "../utils/px2vw"

//border: 3px solid gray;

export const CurrentDayContainer = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    display: grid;
    height: 100%;
    gap: 1rem;
    grid-template-columns: 2fr 1fr;
  }

  @media (min-width: 1024px) {
    height: 100%;
    grid-template-columns: 2fr 1fr;
  }
`
