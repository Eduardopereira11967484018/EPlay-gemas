import styled from "styled-components";
import { colors } from "../../styles";
import { TagContainer } from "../Tag/styles";
import { Link } from "react-router-dom";

// Estilo do Card
export const Card = styled(Link)`
  background-color: ${colors.gray};
  border-radius: 8px;
  padding: 8px;
  position: relative;
  text-decoration: none;
  color: ${colors.white};
  display: block;
  height: 100%;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px; // Adiciona borda arredondada à imagem
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    height: auto; // Ajusta altura em telas menores
  }
`;

// Estilo do título
export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  margin-top: 16px;
  margin-bottom: 8px;
`;

// Estilo da descrição
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
`;

// Estilo das informações posicionadas no canto
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center; // Alinha os itens verticalmente
`;
