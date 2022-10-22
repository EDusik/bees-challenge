import styled from "styled-components";

export const HomeStyled = styled.div`
	margin: 0 auto;
	max-width: 100%;
	min-height: 100vh;
  background-color: var(--primary);
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  form.home {
    min-height: 225px;
    align-items: center;
    display: grid;
    margin: 0 auto;
    justify-items: start;

    p, label {
      font-size: 14px;
    }

    input.home__input-name {
      font-size: 1rem;
      height: 44px;
      width: 300px;
      padding: 10px 12px;
      border: 1px solid var(--input-border);
      border-radius: 4px;
    }

    div.home__input-checkbox {
      justify-content: center;
      display: flex;
      width: 100%;

      input {
        margin-right: 12px;
      }
    }

    button {
      border: none;
      padding: 8px 16px;
      width: 75px;
      height: 40px;
      color: white; 
      margin: 0 auto;
      background-color: var(--button-enabled);
      transition: .2s;

      &:hover {
        opacity: 0.9;
      }
      
      &:disabled {
        background-color: var(--button-disabled);
        cursor: not-allowed;
      }
    }
  }

  img {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
