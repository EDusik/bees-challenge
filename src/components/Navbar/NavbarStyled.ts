import styled from "styled-components";

export const NavbarStyled = styled.nav`
  width: 100%; 
  height: 72px;
  background-color: var(--primary);
  color: var(--black);
  padding: 0 20px;
  margin-bottom: 74px;

  div { 
    height: 72px;
    max-width: 1290px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 30px;
    }

    button {
      background: none;
      border: none;
      font-size: 30px;
      display: flex;
      align-items: center;
      transition: .2s;

      img {
        margin-right: 10px;
      }

      &:hover {
        opacity: .8;
      }
    }

    @media (max-width: 450px) {
      h2, button {
        font-size: 22px;
      }
    }
  }
`;
