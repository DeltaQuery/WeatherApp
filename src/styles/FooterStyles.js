import styled from "styled-components"

export const FooterContainer = styled.div`
    background-color: ${({theme}) => theme.colors.sbg };
    padding-left: 10%;
    padding-right: 10%;
    margin-top: 2rem;
    height: 70px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;

    .Footer--Linkedin {
        text-align: right;
    }

    .Footer--MadeBy {
        text-align: center;
    }

@media (min-width: 420px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    padding-left: 16%;
    padding-right: 16%;
  }
`

