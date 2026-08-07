import * as S from './styled'

import restImage from '../../assets/image-2.png'

const DisplayRest = () => {
  return (
    <S.DisplayC>
      <S.DisplayImageC>
        <S.DisplayImage src={restImage}/>
      </S.DisplayImageC>
      <S.Highlight>
        Italiana
      </S.Highlight>
      <S.RestName>
        La Dolce Vita Trattoria
      </S.RestName>
    </S.DisplayC>
  )
}

export default DisplayRest
