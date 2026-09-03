import * as S from './styled'

import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router'


const RestPageHero = () => {
  const navigate = useNavigate()

  const handleClickBackHome = () => {
    navigate('/')
  }

  return (
    <S.RestPageHeroC>
      <S.CenterC>
        <S.RestHeroMessage onClick={handleClickBackHome}>
          Restaurantes
        </S.RestHeroMessage>
        <S.Logo src={logo} />
        <S.HeroMessage>
          0 produto(s) no carrinho
        </S.HeroMessage>
      </S.CenterC>
    </S.RestPageHeroC>
  )
}

export default RestPageHero
