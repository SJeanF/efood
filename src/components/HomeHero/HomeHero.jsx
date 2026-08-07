import * as S from './styled'

import logo from '../../assets/logo.png'


const HomeHero = () => {
  return (
    <S.HomeC>
      <S.CenterC>
      <S.Logo src={logo} />
      <S.HeroMessage>
        Viva experiências gastronômicas no confoto da sua casa
      </S.HeroMessage>
      </S.CenterC>
    </S.HomeC>
  )
}

export default HomeHero
