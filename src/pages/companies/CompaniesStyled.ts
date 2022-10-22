import styled from "styled-components";

export const CompaniesStyled = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  .companies__container-error {
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    word-break: normal;
    flex-direction: column;

    p:last-child {
      margin-top: 8px;
    }
  }
`;
