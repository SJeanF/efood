import * as S from './styled'

import Cart from './Cart/Cart'
const Aside = () => {

  return (
    <S.SafeArea>
      <S.AsideC>
        <Cart/>
      </S.AsideC>
    </S.SafeArea>
  )
}

export default Aside