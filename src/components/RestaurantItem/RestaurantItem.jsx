import * as S from './styled'

import starImage from '../../assets/star-image.png'
import { useNavigate } from 'react-router'

const RestaurantItem = ({id, title, desc, type, dest, note, img}) => {
  const navigate = useNavigate()

  const handleLearnMore = () => {
    navigate(`restaurant/${id}`)
  }

  return (
    <S.RestItemC>
      <S.TopC>
        <S.RestImage src={img}/>
        <S.EmphasisC>
          <S.ButtonStyle>{type}</S.ButtonStyle>
          {dest && <S.ButtonStyle>Destaque da semana</S.ButtonStyle>}
        </S.EmphasisC>
      </S.TopC>
      <S.MidBottonC>
        <S.MidC>
          <S.RestTitle>
            {title}
          </S.RestTitle>
          <S.StarC>
            <S.Note>
              {note}
            </S.Note>
            <S.Star src={starImage}/>
          </S.StarC>
        </S.MidC>
        <S.BottomC>
          <S.RestDesc title={desc}>
            {desc}
          </S.RestDesc>
          <S.Button onClick={handleLearnMore} type='button'>Saiba Mais</S.Button>
        </S.BottomC>
      </S.MidBottonC>
    </S.RestItemC>
  )
}

export default RestaurantItem
