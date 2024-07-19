import styled from 'styled-components';
import { breakpoints, colors } from '../../styles';

// Lista de links do cabeçalho
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`;

// Container do cabeçalho
export const HeaderBar = styled.header`
  background-color: ${colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a,
  span {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;
  }

  h1 {
    line-height: 0;
  }
`;

// Linha do cabeçalho para alinhamento
export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`;

// Menu móvel
export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`;

// Item de link na lista
export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      padding: 16px 0;
      display: block;
      text-align: center;
    }
  }
`;

// Botão do carrinho
export const CartButton = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    margin-left: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`;

// Botão de menu hamburguer
export const Hamburguer = styled.div`
  width: 32px;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${colors.white};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;
