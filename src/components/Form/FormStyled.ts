import styled from "styled-components";

export const FormStyled = styled.div`
  margin: 0 auto;

  form.home {
    min-height: 225px;
    display: grid;
    justify-items: start;
    align-items: center;

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
      border-radius: 4px;

      &:hover {
        opacity: 0.9;
      }
      
      &:disabled {
        background-color: var(--button-disabled);
        cursor: not-allowed;
      }
    }
  }
`;
