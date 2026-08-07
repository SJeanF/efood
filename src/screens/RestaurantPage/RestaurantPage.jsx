import * as S from './styled'

import RestPageHero from '../../components/RestPageHero/RestPageHero'
import DisplayRest from '../../components/DisplayRest/DisplayRest'
import MenuItem from '../../components/MenuItem/MenuItem'
import Footer from '../../components/Footer/Footer'

const RestaurantPerfil = () => {
  return (
    <S.RestPageC>
      <S.TopC>
        <RestPageHero/>
        <DisplayRest/>
      </S.TopC>
      <S.MenuC>
        <S.MenuList>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
        </S.MenuList>
      </S.MenuC>
      <Footer/>
    </S.RestPageC>
  )
}

export default RestaurantPerfil
