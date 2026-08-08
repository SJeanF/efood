import * as S from './styled'


const DisplayRest = ({title, type, image}) => {
  return (
    <S.DisplayC>
      <S.DisplayImageC>
        <S.DisplayImage src={image}/>
      </S.DisplayImageC>
      <S.Highlight>
        {type}
      </S.Highlight>
      <S.RestName>
        {title}
      </S.RestName>
    </S.DisplayC>
  )
}

export default DisplayRest
