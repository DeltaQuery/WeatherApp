import styled from "styled-components"

export const SearchInput = styled.input`
max-width: 420px;
width: 100%;
height: 40px;
border-radius: 4px;
border: 1px solid lightgray;
padding-left: 8px;
position: relative;
background: ${({theme}) => theme.colors.input };

@media (min-width: 768px) {
    max-width: 100%;
    width: 300px;
  }
`

export const SuggestionsContainer = styled.div`
display: ${props => props.display };
max-width: 98%;
width: 280px;
border: 1px solid ${props => props.inputColor};
border-radius: 4px;
position: absolute;
z-index: 1;
background-color: ${({theme}) => theme.colors.input };

.suggestionItem {
    background-color: ${({theme}) => theme.colors.input };
}

.suggestionInactive, .suggestionActive {
    padding-left: 8px;
    padding-right: 8px;
    margin-top: 12px;
    padding-bottom: 2px;
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.input };
}

.suggestionInactive {
    border-bottom: 1px dotted lightgray;
  }
  
  .suggestionActive {
    border-bottom: 1px solid lightgray;
  }
`

export const LocationContainer = styled.div`
    margin-top: 4px;
    max-width: 100%;
    width: 300px;

    @media (min-width: 768px) {
        max-width: 100%;
        width: 300px;
      }
`

export const LocalDate = styled.div`
    font-size: 1.4rem;
`
