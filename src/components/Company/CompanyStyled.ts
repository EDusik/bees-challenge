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
  }

  span {
    max-width: 185px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    border-radius: 1rem;
    padding: 4px 16px;
    margin: 1rem 14px 1rem 0;
    background-color: var(--primary);
    
    img {
      align-items: center;
      width: 18px;
      margin-right: 12px;
    }

    button {
      display: flex;
      width: 22px;
      align-items: center;
      border: none;
      background-color: transparent;
      transition: .2s;
      width: 18px;
      margin-right: 12px;

      &:hover {
        opacity: .6;
      }
    }

    input {
      height: 20px;
      width: 90px;
      padding: 0 6px;
      border: 1px solid var(--input-border);
      border-radius: 4px;

      &:disabled {
        display: none;
      }
    }
  }

	@media (max-width: 450px) {
    width: calc(100% - 48px);
	}
`;
