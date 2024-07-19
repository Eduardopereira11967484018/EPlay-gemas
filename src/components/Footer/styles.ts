import styled from "styled-components";
import { colors } from "../../styles";
import { HashLink } from 'react-router-hash-link';

// Container
export const Container = styled.footer`
  background-color: ${colors.gray};
  padding: 32px 16px; // Ajuste o padding para dispositivos menores
  font-size: 14px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    padding: 32px 0; // Padding maior para telas maiores
  }
`;

// Título seção
export const SectionTitle = styled.h4`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px; // Adicione um espaço abaixo do título
`;

// Lista de link
export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  @media (min-width: 768px) {
    flex-direction: row; // Altere a direção dos links para linha em telas maiores
  }
`;

// Link
export const Link = styled(HashLink)`
  color: ${colors.lightGray};
  text-decoration: none;
  margin: 4px 8px; // Margem ajustada
  &:hover,
  &:focus {
    color: ${colors.white}; // Alterar cor ao passar o mouse ou focar no link
    text-decoration: underline; // Adiciona um sublinhado no link ao passar o mouse
  }
`;

//  rodapé
export const FooterSection = styled.div`
  margin-bottom: 32px; // Reduzido para melhor espaçamento
  @media (min-width: 768px) {
    margin-bottom: 64px; // Maior espaçamento em telas maiores
  }
`;
