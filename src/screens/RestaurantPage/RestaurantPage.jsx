import * as S from './styled'

import RestPageHero from '../../components/RestPageHero/RestPageHero'
import DisplayRest from '../../components/DisplayRest/DisplayRest'
import MenuItem from '../../components/MenuItem/MenuItem'
import Footer from '../../components/Footer/Footer'
import DishModal from '../../components/DishModal/DishModal'

import { useState } from 'react'

const RestaurantPerfil = () => {
  // eslint-disable-next-line no-unused-vars
  const [modalIsVisible, setModalIsVisible] = useState(false);

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
      {modalIsVisible && <DishModal/>}
    </S.RestPageC>
  )
}

export default RestaurantPerfil
