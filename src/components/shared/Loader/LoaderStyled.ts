import styled from "styled-components";

export const LoaderStyled = styled.div`
  margin: 0 auto;
  display: flex;
  -webkit-animation: action 0.5s infinite  alternate;
  animation: action 0.5s infinite  alternate;

  img {
    width: 80px;
  }

  @-webkit-keyframes action {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
  }

  @keyframes action {
      0% { transform: translateY(0); }
      100% { transform: translateY(-20px); }
  }
`;
