import styled from "styled-components"

export const CurrentDataContainer = styled.div`
  padding: 20px;
  border: 3px solid ${({theme}) => theme.colors.sbg };
  width: 100%;
  margin-bottom: 1rem;

  .CurrentData--Heading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .CurrentData--Heading--DayAndWeather--Day {
    font-size: 26px;
  }

  .CurrentData--Heading--DayAndWeather--Weather {
    font-size: 20px;
    color: ${({theme}) => theme.colors.scolor };
  }

  .CurrentData--DataRow {
    display: grid;
    grid-template-columns: 5fr 2fr;
  }

  .CurrentData--DataRow--1Col {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0px;
  }

  .CurrentData--DataRow--1Col--1Col {
  }

  .CurrentData--DataRow--1Col--1Col div img, .CurrentData--DataRow--1Col--2Col div img {
    margin-right: 10px;
  }

  .CurrentData--DataRow--1Col--1Col > div, .CurrentData--DataRow--1Col--2Col > div {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    color: ${({theme}) => theme.colors.scolor };
  }

  .CurrentData--DataRow--2Col div {
    font-size: 36px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .CurrentData--ChartContainer {
    min-height: 260px;
  }

  .CurrentData--DataRow--2Col--Content {
    display: flex;
    gap: 4px;
    flex-direction: column;
  }

  @media (min-width: 420px) {
    .CurrentData--DataRow--1Col {
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }

    .CurrentData--DataRow--2Col--Content {
      display: flex;
      flex-direction: row;
    }
  }

  @media (min-width: 768px) {
    min-height: 200px;
    height: 100%;

    .CurrentData--DataRow--1Col {
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }

    .CurrentData--DataRow {
      display: grid;
      grid-template-columns: 6fr 2fr;
    }
  }

  @media (min-width: 1024px) {
    min-height: 200px;
    height: 100%;
  }
`;