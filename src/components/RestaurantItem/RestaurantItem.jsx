import * as S from './styled'

import restImage from '../../assets/image-1.png'
import starImage from '../../assets/star-image.png'

const RestaurantItem = () => {
  return (
    <S.RestItemC>
      <S.TopC>
        <S.RestImage src={restImage}/>
        <S.EmphasisC>
          <S.ButtonStyle>Italiana</S.ButtonStyle>
        </S.EmphasisC>
      </S.TopC>
      <S.MidBottonC>
        <S.MidC>
          <S.RestTitle>
            La Dolce Vita Trattoria
          </S.RestTitle>
          <S.StarC>
            <S.Note>
              4.9
            </S.Note>
            <S.Star src={starImage}/>
          </S.StarC>
        </S.MidC>
        <S.BottomC>
          <S.RestDesc>
            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!
          </S.RestDesc>
          <S.Button type='button'>Saiba Mais</S.Button>
        </S.BottomC>
      </S.MidBottonC>
    </S.RestItemC>
  )
}

export default RestaurantItem
