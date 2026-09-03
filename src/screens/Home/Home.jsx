import * as S from './styled'
import HomeHero from '../../components/HomeHero/HomeHero'
import RestaurantItem from '../../components/RestaurantItem/RestaurantItem'
import Footer from '../../components/Footer/Footer'

import { useEffect, useState } from 'react'

import { ebacApi } from '../../services/api'
const Home = () => {
  const [resList, setResList] = useState(null)

  useEffect(() => {
    const fetchRest = async () => {
      ebacApi.get()
      .then((res) => setResList(res.data))
    }

    fetchRest()
  }, [])

  return (
    <S.HomeC onClick={() => console.log(resList)}>
      <HomeHero/>
      <S.ResList>
      {resList != null && resList.map((curr) => <RestaurantItem id={curr.id} title={curr.titulo} desc={curr.descricao} type={curr.tipo} dest={curr.destacado} note={curr.avaliacao} img={curr.capa}/>)}
      </S.ResList>
      <Footer/>
    </S.HomeC>
  )
}

export default Home
