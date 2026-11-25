import * as S from './styled'

import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { openCart } from '../../store/cartSlice'


const RestPageHero = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const count = useSelector((state) => state.cart.items.length)

  const handleClickBackHome = () => {
    navigate('/')
  }

  return (
    <S.RestPageHeroC>
      <S.CenterC>
        <S.RestHeroMessage onClick={handleClickBackHome}>
          Restaurantes
        </S.RestHeroMessage>
        <S.Logo src={logo} alt="efood" />
        <S.CartMessage onClick={() => dispatch(openCart())}>
          {count} produto(s) no carrinho
        </S.CartMessage>
      </S.CenterC>
    </S.RestPageHeroC>
  )
}

export default RestPageHero
