import * as S from './styled'

import dishImage from '../../../assets/image-3.png'
import trashIcon from '../../../assets/lixo.png'

const CartItem = () => {
  return (
    <S.CartItemC>
      <S.DishImage src={dishImage}/>
      <S.InfosC>
        <S.Title>
          Pizza Marguerita 
        </S.Title>
        <S.Price>
          R$ 60,90
        </S.Price>
        <S.TrashIcon src={trashIcon} />
      </S.InfosC>
    </S.CartItemC>
  )
}

export default CartItem
