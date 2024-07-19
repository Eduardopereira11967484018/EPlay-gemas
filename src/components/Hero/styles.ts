import styled from "styled-components";
import { breakpoints, colors } from "../../styles";
import { TagContainer } from "../Tag/styles";

// Banner principal com fundo de imagem
export const Banner = styled.div`
  position: relative;
  display: block;
  height: 480px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; // Ajusta o fundo para cobrir a área disponível

  padding-top: 16px;

  @media(max-width: ${breakpoints.tablet}) {
    background-size: cover; // Garantir que o fundo cubra a área disponível
  }

  &::after {
    position: absolute;
    background-color: ${colors.black}; // Usar a variável de cor
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`

// Informações sobre o jogo
export const Infos = styled.div`
  padding: 16px;
  background-color: ${colors.black};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
