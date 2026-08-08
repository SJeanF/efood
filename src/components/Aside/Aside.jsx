import Cart from '../Cart/Cart'
import * as S from './styled'

const Aside = ({setAsideIsVisible}) => {
  const handleSafeAreaClick = () => {
    setAsideIsVisible(false);
  }

  return (
    <S.SafeArea onClick={handleSafeAreaClick}>
      <S.AsideC onClick={(e) => e.stopPropagation()}>
        <Cart/>
      </S.AsideC>
    </S.SafeArea>
  )
}

export default Aside
