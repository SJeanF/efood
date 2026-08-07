import * as S from './styled'
import HomeHero from '../../components/HomeHero/HomeHero'
import RestaurantItem from '../../components/RestaurantItem/RestaurantItem'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <S.HomeC>
      <HomeHero/>
      <S.ResList>
        <RestaurantItem/>
        <RestaurantItem/>
        <RestaurantItem/>
        <RestaurantItem/>
        <RestaurantItem/>
        <RestaurantItem/>
      </S.ResList>
      <Footer/>
    </S.HomeC>
  )
}

export default Home
