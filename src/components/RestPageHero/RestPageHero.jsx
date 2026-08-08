import * as S from './styled'

import logo from '../../assets/logo.png'


const RestPageHero = ({setAsideIsVisible}) => {
  const handleCartClick = () => {
    setAsideIsVisible(true);
  }

  return (
    <S.RestPageHeroC>
      <S.CenterC>
        <S.HeroMessage>
          Restaurantes
        </S.HeroMessage>
        <S.Logo src={logo} />
        <S.CartMessage onClick={handleCartClick}>
          0 produto(s) no carrinho
        </S.CartMessage>
      </S.CenterC>
    </S.RestPageHeroC>
  )
}

export default RestPageHero
