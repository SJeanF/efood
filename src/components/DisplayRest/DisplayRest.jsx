import * as S from './styled'


const DisplayRest = ({title, type, image}) => {
  return (
    <S.DisplayC>
      <S.DisplayImageC>
        <S.DisplayImage src={image} alt={title}/>
      </S.DisplayImageC>
      <S.TextC>
        <S.Highlight>
          {type}
        </S.Highlight>
        <S.RestName>
          {title}
        </S.RestName>
      </S.TextC>
    </S.DisplayC>
  )
}

export default DisplayRest
