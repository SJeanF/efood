import * as S from './styled'

import RestPageHero from '../../components/RestPageHero/RestPageHero'
import DisplayRest from '../../components/DisplayRest/DisplayRest'
import MenuItem from '../../components/MenuItem/MenuItem'
import Footer from '../../components/Footer/Footer'
import DishModal from '../../components/DishModal/DishModal'
import Aside from '../../components/Aside/Aside'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ebacApi } from '../../services/api'

const RestaurantPerfil = () => {
  const [restInfos, setRestInfos] = useState(null)
  const [menuInfos, setMenuInfos] = useState(null)
  const [modalState, setModalState] = useState({visible: false})
  const [asideIsVIsible, setAsideIsVisible] = useState(false);
  
  const {id} = useParams()

  useEffect(() => {
    const fetchRestInfos = async () => {
      ebacApi.get(`/${id}`)
      .then((res) => {
        setRestInfos(res.data)
        setMenuInfos(res.data.cardapio)
      })
    }

    fetchRestInfos()
  }, [id])

  return (
    <S.RestPageC>
      <S.TopC>
        <RestPageHero setAsideIsVisible={setAsideIsVisible}/>
        {restInfos != null && <DisplayRest title={restInfos.titulo} type={restInfos.tipo} image={restInfos.capa}/>}
      </S.TopC>
      <S.MenuC>
        <S.MenuList>
          {menuInfos != null && menuInfos.map((curr) => <MenuItem key={`${restInfos.titulo}-dish-${curr.id}`}
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
      {asideIsVIsible && <Aside setAsideIsVisible={setAsideIsVisible}/>}
    </S.RestPageC>
  )
}

export default RestaurantPerfil
