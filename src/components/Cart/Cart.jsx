import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styled'

import { closeCart, removeItem, selectCartTotal } from '../../store/cartSlice'
import { formatPrice } from '../../utils/format'

import trashIcon from '../../assets/lixeira.png'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, isOpen } = useSelector((state) => state.cart)
  const total = useSelector(selectCartTotal)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') dispatch(closeCart())
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, dispatch])

  if (!isOpen) return null

  return (
    <S.Overlay onClick={() => dispatch(closeCart())}>
      <S.Sidebar onClick={(e) => e.stopPropagation()}>
        {items.length === 0 ? (
          <S.Empty>O carrinho está vazio.</S.Empty>
        ) : (
          <S.ItemList>
            {items.map((item) => (
              <S.Item key={item.cartId}>
                <S.ItemImage src={item.image} alt={item.title} />
                <div>
                  <S.ItemTitle>{item.title}</S.ItemTitle>
                  <S.ItemPrice>{formatPrice(item.price)}</S.ItemPrice>
                </div>
                <S.RemoveButton
                  type='button'
                  aria-label={`Remover ${item.title} do carrinho`}
                  onClick={() => dispatch(removeItem(item.cartId))}
                >
                  <img src={trashIcon} alt='' />
                </S.RemoveButton>
              </S.Item>
            ))}
          </S.ItemList>
        )}
        <S.TotalRow>
          <span>Valor total</span>
          <span>{formatPrice(total)}</span>
        </S.TotalRow>
        <S.ContinueButton type='button' disabled={items.length === 0}>
          Continuar com a entrega
        </S.ContinueButton>
      </S.Sidebar>
    </S.Overlay>
  )
}

export default Cart
