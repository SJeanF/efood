import * as S from './styled'

import logo from '../../assets/logo.png'


const RestPageHero = ({navigate}) => {
  return (
    <S.RestPageHeroC>
      <S.CenterC>
        <S.HeroMessage onClick={() => navigate()}>
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
