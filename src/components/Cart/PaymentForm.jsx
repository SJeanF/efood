import * as S from './styled'

import { formatPrice } from '../../utils/format'

const PaymentForm = ({ data, total, onChange, onSubmit, onBack, loading, error }) => {
  const currentYear = new Date().getFullYear()

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <>
      <S.StepTitle>Pagamento - Valor a pagar {formatPrice(total)}</S.StepTitle>
      <S.Form onSubmit={handleSubmit}>
        <S.Field>
          <label htmlFor="cardName">Nome no cartão</label>
          <input id="cardName" required value={data.name} onChange={onChange('name')} placeholder=" " />
        </S.Field>
        <S.Row $cols="1fr 87px" $gap="29px">
          <S.Field>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input id="cardNumber" required inputMode="numeric" pattern="[0-9 ]{13,23}" title="Número do cartão"
              value={data.number} onChange={onChange('number')} placeholder=" " />
          </S.Field>
          <S.Field>
            <label htmlFor="cardCode">CVV</label>
            <input id="cardCode" required inputMode="numeric" pattern="[0-9]{3,4}" maxLength={4} title="3 ou 4 dígitos"
              value={data.code} onChange={onChange('code')} placeholder=" " />
          </S.Field>
        </S.Row>
        <S.Row>
          <S.Field>
            <label htmlFor="cardMonth">Mês de vencimento</label>
            <input id="cardMonth" required inputMode="numeric" pattern="(0?[1-9]|1[0-2])" maxLength={2} title="Mês de 1 a 12"
              value={data.month} onChange={onChange('month')} placeholder=" " />
          </S.Field>
          <S.Field>
            <label htmlFor="cardYear">Ano de vencimento</label>
            <input id="cardYear" required inputMode="numeric" pattern="[0-9]{4}" maxLength={4} title={`Ano com 4 dígitos (a partir de ${currentYear})`}
              value={data.year} onChange={onChange('year')} placeholder=" " />
          </S.Field>
        </S.Row>
        {error && <S.ErrorMessage role="alert">{error}</S.ErrorMessage>}
        <S.Actions style={{ marginTop: 16 }}>
          <S.ContinueButton type="submit" disabled={loading}>
            {loading ? 'Finalizando...' : 'Finalizar pagamento'}
          </S.ContinueButton>
          <S.ContinueButton type="button" onClick={onBack} disabled={loading}>
            Voltar para a edição de endereço
          </S.ContinueButton>
        </S.Actions>
      </S.Form>
    </>
  )
}

export default PaymentForm
