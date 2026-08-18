import * as S from './styled'

import logo from '../../assets/logo.png'


const RestPageHero = () => {
  return (
    <S.RestPageHeroC>
      <S.CenterC>
        <S.HeroMessage>
          Restaurantes
        </S.HeroMessage>
        <S.Logo src={logo} />
        <S.HeroMessage>
          0 produto(s) no carrinho
        </S.HeroMessage>
      </S.CenterC>
    </S.RestPageHeroC>
  )
}

export default RestPageHero
