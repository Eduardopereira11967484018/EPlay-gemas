import styled from "styled-components";
import { colors } from "../../styles";
import { TagContainer } from "../Tag/styles";
import { ButtonContainer } from "../Button/styles";
import fechar from '../../assets/images/fechar.png';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Usando rgba para controlar a opacidade */
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1000; /* Garantir que o carrinho esteja acima de outros elementos */

  &.is-open {
    display: flex;
  }
`;

export const Sidebar = styled.aside`
  background-color: ${colors.gray};
  z-index: 1001; /* Garantir que o conteúdo do carrinho esteja acima do overlay */
  padding: 40px 16px;
  max-width: 360px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Adicionando sombra para um melhor destaque */

  ${ButtonContainer} {
    max-width: 360px;
    width: 100%;
  }
`;

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${colors.lightGray};
  }
`;

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.white};
  margin: 32px 0 16px;
`;

export const CartItem = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.lightGray};
  padding: 8px 0;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${colors.white};
    font-weight: bold;
    font-size: 16px;
    margin: 0; /* Removendo margem para melhor alinhamento */
  }

  span {
    display: block;
    color: ${colors.white};
    font-weight: bold;
    font-size: 14px;
    margin-top: 4px; /* Adicionando espaço entre o nome e o preço */
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8px;
    right: 8px; /* Ajustando a posição para não encostar na borda */
    cursor: pointer;

    &:hover {
      opacity: 0.8; /* Adicionando feedback visual ao passar o mouse */
    }
  }
`;
