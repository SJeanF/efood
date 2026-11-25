import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import * as S from './styled'
import DeliveryForm from './DeliveryForm'
import PaymentForm from './PaymentForm'
import Confirmation from './Confirmation'

import { clearCart, closeCart, removeItem, selectCartTotal } from '../../store/cartSlice'
import { formatPrice } from '../../utils/format'
import { postCheckout } from '../../services/api'

import trashIcon from '../../assets/lixeira.png'

const emptyDelivery = { receiver: '', description: '', city: '', zipCode: '', number: '', complement: '' }
const emptyPayment = { name: '', number: '', code: '', month: '', year: '' }

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { items, isOpen } = useSelector((state) => state.cart)
  const total = useSelector(selectCartTotal)

  // cart | delivery | payment | confirmation
  const [step, setStep] = useState('cart')
  const [delivery, setDelivery] = useState(emptyDelivery)
  const [payment, setPayment] = useState(emptyPayment)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [orderId, setOrderId] = useState('')

  const handleClose = () => {
    dispatch(closeCart())
    if (step === 'confirmation') {
      setStep('cart')
      setOrderId('')
    }
  }

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  })

  const handleChange = (setter) => (field) => (e) => {
    const value = e.target.value
    setter((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmitOrder = async () => {
    setLoading(true)
    setError('')

    const order = {
      products: items.map((item) => ({ id: item.id, price: item.price })),
      delivery: {
        receiver: delivery.receiver,
        address: {
          description: delivery.description,
          city: delivery.city,
          zipCode: delivery.zipCode,
          number: Number(delivery.number),
          complement: delivery.complement,
        },
      },
      payment: {
        card: {
          name: payment.name,
          number: payment.number.replace(/\s/g, ''),
          code: Number(payment.code),
          expires: {
            month: Number(payment.month),
            year: Number(payment.year),
          },
        },
      },
    }

    try {
      const res = await postCheckout(order)
      setOrderId(res.data.orderId)
      setStep('confirmation')
      dispatch(clearCart())
      setDelivery(emptyDelivery)
      setPayment(emptyPayment)
    } catch {
      setError('Não foi possível finalizar o pedido. Confira os dados e tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const handleConclude = () => {
    handleClose()
    navigate('/')
  }

  if (!isOpen) return null

  return (
    <S.Overlay onClick={handleClose}>
      <S.Sidebar onClick={(e) => e.stopPropagation()}>
        {step === 'cart' && (
          <>
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
            <S.ContinueButton type='button' disabled={items.length === 0} onClick={() => setStep('delivery')}>
              Continuar com a entrega
            </S.ContinueButton>
          </>
        )}

        {step === 'delivery' && (
          <DeliveryForm
            data={delivery}
            onChange={handleChange(setDelivery)}
            onNext={() => setStep('payment')}
            onBack={() => setStep('cart')}
          />
        )}

        {step === 'payment' && (
          <PaymentForm
            data={payment}
            total={total}
            onChange={handleChange(setPayment)}
            onSubmit={handleSubmitOrder}
            onBack={() => setStep('delivery')}
            loading={loading}
            error={error}
          />
        )}

        {step === 'confirmation' && (
          <Confirmation orderId={orderId} onConclude={handleConclude} />
        )}
      </S.Sidebar>
    </S.Overlay>
  )
}

export default Cart
