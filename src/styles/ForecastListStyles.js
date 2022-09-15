import styled from "styled-components"

export const ForecastListContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
overflow: scroll;
gap: 0.5rem;
`

export const ForecastItemContainer = styled.div`
border: 3px solid ${({theme}) => theme.colors.sbg };
padding: 1.2rem;
font-size: 14px;
font-weight: 600;

div {
    color: ${({theme}) => theme.colors.fcolor };
}
`
