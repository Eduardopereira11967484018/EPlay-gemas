import { Game } from '../../pages/Home';
import Button from '../Button';
import Tag from '../Tag';

import { parseToBrl } from '../../utils';
import * as S from './styles';
import { useDispatch } from 'react-redux';
import { add, open } from '../../store/reducers/cart';

type Props = {
  game: Game;
};

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(game));
    dispatch(open());
  };

  const {
    media: { cover },
    details: { category, system },
    name,
    prices: { discount, old, current },
  } = game;

  return (
    <S.Banner style={{ backgroundImage: `url(${cover})` }}>
      <div className='container'>
        <div>
          <Tag>{category}</Tag>
          <Tag>{system}</Tag>
        </div>
        <S.Infos>
          <h2>{name}</h2>
          <p>
            {discount && old && (
              <span>De {parseToBrl(old)}</span>
            )}
            {current && (
              <>
                Por {parseToBrl(current)}
              </>
            )}
          </p>
          {current && (
            <Button
              type='button'
              title='Clique aqui para adicionar este jogo ao carrinho'
              variant='primary'
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  );
};

export default Hero;
