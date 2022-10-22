import styled from "styled-components";

export const CompanyStyled = styled.div`
  width: 382px;
  min-height: 282px;
  display: flex;
  margin: 24px auto;
  padding: 30px 24px;
  background-color: var(--white);
  border: solid 1px var(--border);

  h2  {
    font-size: 20px;
    font-weight: 700;
  }

  p {
    font-size: 16px;
    line-height: 26px;

    &:first-child {
    margin-top: 20px;
  }

    &:last-child {
      margin-bottom: 30px;
    }
  }
`;
