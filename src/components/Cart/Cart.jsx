import CartItem from './CartItem/CartItem'
import * as S from './styled'

const Cart = () => {
  return (
    <S.CartC>
      <S.CartItemList>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
      </S.CartItemList>
      <S.TotValC>
        <S.TotValT>
          Valor total
        </S.TotValT>
        <S.TotValT>
          R$ 182,70
        </S.TotValT>
      </S.TotValC>
      <S.ButtonC>
        <S.ContinueButton>
          Continuar com a entrega
        </S.ContinueButton>
      </S.ButtonC>
    </S.CartC>
  )
}

export default Cart
