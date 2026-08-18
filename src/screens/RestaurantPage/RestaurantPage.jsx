import * as S from './styled'

import RestPageHero from '../../components/RestPageHero/RestPageHero'
import DisplayRest from '../../components/DisplayRest/DisplayRest'
import MenuItem from '../../components/MenuItem/MenuItem'
import Footer from '../../components/Footer/Footer'
import DishModal from '../../components/DishModal/DishModal'

import { useState } from 'react'
import { useParams } from 'react-router'

import restInfos from '../../assets/restInfos.json'
import restMenu from '../../assets/restMenus.json'

const RestaurantPerfil = () => {
  const [modalState, setModalState] = useState({visible: false})
  
  const {id} = useParams()

  const currRestInfos = restInfos.find((curr) => curr.id == id)
  const currMenuInfos = restMenu.find((curr) => curr.id == id)

  return (
    <S.RestPageC>
      <S.TopC>
        <RestPageHero/>
        {currRestInfos != null && <DisplayRest title={currRestInfos.titulo} type={currRestInfos.tipo} image={currRestInfos.capa}/>}
      </S.TopC>
      <S.MenuC>
        <S.MenuList>
          {currMenuInfos != null && currMenuInfos.cardapio.map((curr) => <MenuItem key={`${currRestInfos.titulo}-dish-${curr.id}`}
            id={curr.id} 
            title={curr.nome} 
            desc={curr.descricao} 
            image={curr.foto} 
            portion={curr.porcao} 
            price={curr.preco} 
            setModal={setModalState}
          />)}
        </S.MenuList>
      </S.MenuC>
      <Footer/>
      {modalState.visible && <DishModal setModal={setModalState} dish={modalState.dish}/>}
    </S.RestPageC>
  )
}

export default RestaurantPerfil
