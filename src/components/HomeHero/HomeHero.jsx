import * as S from './styled'

import logo from '../../assets/logo.png'


const HomeHero = () => {
  return (
    <S.HomeC>
      <S.Logo src={logo} alt="efood" />
      <S.HeroMessage>
        Viva experiências gastronômicas no conforto da sua casa
      </S.HeroMessage>
    </S.HomeC>
  )
}

export default HomeHero
