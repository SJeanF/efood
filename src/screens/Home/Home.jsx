import * as S from './styled'
import HomeHero from '../../components/HomeHero/HomeHero'
import RestaurantItem from '../../components/RestaurantItem/RestaurantItem'
import Footer from '../../components/Footer/Footer'

import restInfos from '../../assets/restInfos.json'
import rest1Image from '../../assets/image-1.png'
import rest2Image from '../../assets/image-1-2.png'

const Home = () => {
  return (
    <S.HomeC>
      <HomeHero/>
      <S.ResList>
      {restInfos != null && restInfos.map((curr) => <RestaurantItem key={``} id={curr.id} title={curr.titulo} desc={curr.descricao} type={curr.tipo} dest={curr.destacado} note={curr.avaliacao} img={curr.capa == "image-1.png" ? rest1Image : rest2Image}/>)}
      </S.ResList>
      <Footer/>
    </S.HomeC>
  )
}

export default Home
