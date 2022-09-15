import styled from "styled-components"

export const HeaderContainer = styled.div`
    background-color: ${({theme}) => theme.colors.sbg };
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 2rem;
    height: 70px;
    display: grid;
    grid-template-columns: 5fr 3fr 5fr;
    align-items: center;
   
.HeaderContainer--Title {
    font-size: 24px;
    font-weight: 600;
}

.HeaderContainer--Mode {
    justify-self: end;
}

.HeaderContainer--Mode--ThemeButton {
  cursor: pointer;
}

.fahrenheit, .celsius {
  font-weight: 600;
  cursor: pointer;
}

.fahrenheit {
  color: orange;
}

@media (min-width: 420px) {
    grid-template-columns: 2fr 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 4fr 2fr 2fr;
  }

  @media (min-width: 1024px) {
    padding-left: 16%;
    padding-right: 16%;
    grid-template-columns: 4fr 1fr 1fr;
  }
`

