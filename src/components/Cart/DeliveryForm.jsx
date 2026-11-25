import * as S from './styled'

const DeliveryForm = ({ data, onChange, onNext, onBack }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    onNext()
  }

  return (
    <>
      <S.StepTitle>Entrega</S.StepTitle>
      <S.Form onSubmit={handleSubmit}>
        <S.Field>
          <label htmlFor="receiver">Quem irá receber</label>
          <input id="receiver" required value={data.receiver} onChange={onChange('receiver')} placeholder=" " />
        </S.Field>
        <S.Field>
          <label htmlFor="description">Endereço</label>
          <input id="description" required value={data.description} onChange={onChange('description')} placeholder=" " />
        </S.Field>
        <S.Field>
          <label htmlFor="city">Cidade</label>
          <input id="city" required value={data.city} onChange={onChange('city')} placeholder=" " />
        </S.Field>
        <S.Row>
          <S.Field>
            <label htmlFor="zipCode">CEP</label>
            <input id="zipCode" required inputMode="numeric" pattern="[0-9]{5}-?[0-9]{3}" title="CEP com 8 dígitos"
              value={data.zipCode} onChange={onChange('zipCode')} placeholder=" " />
          </S.Field>
          <S.Field>
            <label htmlFor="number">Número</label>
            <input id="number" required inputMode="numeric" pattern="[0-9]+" title="Somente números"
              value={data.number} onChange={onChange('number')} placeholder=" " />
          </S.Field>
        </S.Row>
        <S.Field>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input id="complement" value={data.complement} onChange={onChange('complement')} placeholder=" " />
        </S.Field>
        <S.Actions>
          <S.ContinueButton type="submit">Continuar com o pagamento</S.ContinueButton>
          <S.ContinueButton type="button" onClick={onBack}>Voltar para o carrinho</S.ContinueButton>
        </S.Actions>
      </S.Form>
    </>
  )
}

export default DeliveryForm
