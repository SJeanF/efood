import * as S from './styled'

const Confirmation = ({ orderId, onConclude }) => (
  <>
    <S.StepTitle>Pedido realizado - {orderId}</S.StepTitle>
    <S.Text>
      Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
    </S.Text>
    <S.Text>
      Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
    </S.Text>
    <S.Text>
      Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
    </S.Text>
    <S.Text>
      Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
    </S.Text>
    <S.ConcludeButton type="button" onClick={onConclude} style={{ marginTop: 2 }}>
      Concluir
    </S.ConcludeButton>
  </>
)

export default Confirmation
