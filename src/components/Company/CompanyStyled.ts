import styled from "styled-components";

export const CompanyStyled = styled.div`
  width: 382px;
  min-height: 300px;
  display: flex;
  margin: 24px;
  padding: 30px 24px;
  background-color: var(--white);
  border: solid 1px var(--border);


  div.company__title {
    display: flex;
    justify-content: space-between;

    h2  {
      font-size: 20px;
      font-weight: 700;
    }

    button {
      background-color: transparent;
      border: none;
      transition: 0.2s;

      &:hover {
        opacity: .5;
      }
    }
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

  span {
    display: inline-flex;
    background-color: var(--primary);
    margin: 1rem 14px 1rem 0;
    padding: 4px 16px;
    border-radius: 1rem;
    font-size: 16px;
    max-width: 185px;

    img {
      width: 16px;
      margin-right: 12px;
    }
  }

	@media (max-width: 450px) {
    width: calc(100% - 48px);
	}
`;
