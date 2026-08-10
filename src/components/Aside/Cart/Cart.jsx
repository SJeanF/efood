import CartiItem from './CartItem/CartiItem'
import * as S from './styled'

const Cart = () => {
  return (
    <S.CartC>
      <S.CartItemList>
        <CartiItem/>
        <CartiItem/>
        <CartiItem/>  
        <CartiItem/>  
        <CartiItem/>  
        <CartiItem/>  
      </S.CartItemList>
    <S.TotC>
      <S.TotText>
        Valor total
      </S.TotText>
      <S.TotText>
        R$ 182,70
      </S.TotText>
    </S.TotC>
    <S.ButtonC>
      <S.ContinueButton>
        Continuar com a entrega
      </S.ContinueButton>
    </S.ButtonC>
    </S.CartC>
  )
}

export default Cart