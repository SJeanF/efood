import * as S from './styled'

import closeImage from '../../assets/close-1.png'

const DishModal = ({dish, setModal}) => {

  const handleCancel = () => {
    setModal({visible: false})
  }

  return (
    <S.SafeArea onClick={handleCancel}>
      <S.ModalC onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={handleCancel} src={closeImage} />
        <S.DishImage src={dish.image}/>
        <S.InfosC>
          <S.DishTitle>
            {dish.title}
          </S.DishTitle>
          <S.DishDesc>
            {dish.desc}
          </S.DishDesc>
          <S.Portion>
            {dish.portion}
          </S.Portion>
          <S.AddCartButton>
            Adicionar ao carrinho - R$ {dish.price.toFixed(2)}
          </S.AddCartButton>
        </S.InfosC>
      </S.ModalC>
    </S.SafeArea>
  )
}

export default DishModal
