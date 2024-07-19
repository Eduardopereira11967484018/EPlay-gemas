import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import * as S from './styles';
import logo from '../../assets/images/logo.svg';
import cartIcon from '../../assets/images/carrinho.svg';
import { open } from '../../store/reducers/cart';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { useState, useCallback } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openCart = useCallback(() => {
    dispatch(open());
  }, [dispatch]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to="/">
            <img src={logo} alt="Logo Eplay" />
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link
                  title="Clique aqui para acessar a página de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção em breve"
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton onClick={openCart}>
          {items.length}
          <span>- produto(s)</span>
          <img src={cartIcon} alt="Ícone do carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link
              title="Clique aqui para acessar a página de categorias"
              to="/categories"
              onClick={closeMenu}
            >
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para acessar a seção em breve"
              to="/#coming-soon"
              onClick={closeMenu}
            >
              Em breve
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para acessar a seção em promoções"
              to="/#on-sale"
              onClick={closeMenu}
            >
              Promoções
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  );
};

export default Header;
