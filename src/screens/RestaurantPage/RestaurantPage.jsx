import * as S from './styled'

import RestPageHero from '../../components/RestPageHero/RestPageHero'
import DisplayRest from '../../components/DisplayRest/DisplayRest'
import MenuItem from '../../components/MenuItem/MenuItem'
import Footer from '../../components/Footer/Footer'

import { useParams } from 'react-router'

import restInfos from '../../assets/restInfos.json'
import restMenu from '../../assets/restMenus.json'
import restDishImage from '../../assets/image-3.png'
import restBack1Image from '../../assets/image-1-2.png'
import restBack2Image from '../../assets/image-1.png'

const RestaurantPerfil = () => {
  
  const {id} = useParams()

  const currRestInfos = restInfos.find((curr) => curr.id == id)
  const currMenuInfos = restMenu.find((curr) => curr.id == id)

  return (
    <S.RestPageC>
      <S.TopC>
        <RestPageHero/>
        {currRestInfos != null && <DisplayRest title={currRestInfos.titulo} type={currRestInfos.tipo} image={id == 0? restBack1Image: restBack2Image}/>}
      </S.TopC>
      <S.MenuC>
        <S.MenuList>
          {currMenuInfos != null && currMenuInfos.cardapio.map((curr) => <MenuItem 
            key={`${currRestInfos.titulo}-dish-${curr.id}`}
            id={curr.id} 
            title={curr.nome} 
            desc={curr.descricao} 
            image={restDishImage} 
            portion={curr.porcao} 
            price={curr.preco} 
            setModal={null}
          />)}
        </S.MenuList>
      </S.MenuC>
      <Footer/>
    </S.RestPageC>
  )
}

export default RestaurantPerfil
