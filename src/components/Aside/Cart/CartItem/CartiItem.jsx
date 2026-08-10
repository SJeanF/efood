import * as S from './styled'

import dishImage from '../../../../assets/image-1.png'
import trashImg from '../../../../assets/lixo.png'

const CartiItem = () => {
  return (
    <S.CartItemC>
      <S.DishImage src={dishImage} />
      <S.DishInfosC>
        <S.Title>
          Pizza Margerita
        </S.Title>
        <S.Price>
          R$ 60,90
        </S.Price>
      </S.DishInfosC>
      <S.TrashIcon src={trashImg} />
    </S.CartItemC>
  )
}

export default CartiItem