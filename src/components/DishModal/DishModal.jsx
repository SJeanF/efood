import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styled'

import closeImage from '../../assets/close-1.png'

import { addItem, openCart } from '../../store/cartSlice'
import { formatPrice } from '../../utils/format'

const DishModal = ({dish, setModal}) => {
  const dispatch = useDispatch()

  const handleCancel = () => {
    setModal({visible: false})
  }

  const handleAddToCart = () => {
    dispatch(addItem(dish))
    setModal({visible: false})
    dispatch(openCart())
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModal({visible: false})
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [setModal])

  return (
    <S.SafeArea onClick={handleCancel}>
      <S.ModalC onClick={(e) => e.stopPropagation()}>
        <S.CloseButton type='button' onClick={handleCancel} aria-label='Fechar'>
          <img src={closeImage} alt='' />
        </S.CloseButton>
        <S.DishImage src={dish.image} alt={dish.title}/>
        <S.InfosC>
          <S.DishTitle>
            {dish.title}
          </S.DishTitle>
          <S.DishDesc>
            {dish.desc}
          </S.DishDesc>
          <S.Portion>
            Serve: {dish.portion}
          </S.Portion>
          <S.AddCartButton type='button' onClick={handleAddToCart}>
            Adicionar ao carrinho - {formatPrice(dish.price)}
          </S.AddCartButton>
        </S.InfosC>
      </S.ModalC>
    </S.SafeArea>
  )
}

export default DishModal
