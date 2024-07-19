import * as S from "./styles";

export type Props = {
  type: 'button' | 'link';
  title: string;
  to?: string;
  onClick?: () => void;
  children: string;
  variant?: 'primary' | 'secondary';
};

const Button = ({ type, title, to, onClick, children, variant = 'primary' }: Props) => {
  return type === 'button' ? (
    <S.ButtonContainer variant={variant} type="button" title={title} onClick={onClick}>
      {children}
    </S.ButtonContainer>
  ) : (
    <S.ButtonLink to={to!} title={title}>
      {children}
    </S.ButtonLink>
  );
};

export default Button;
