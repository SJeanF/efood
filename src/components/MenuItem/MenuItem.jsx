import * as S from './styled'


const MenuItem = ({id, title, desc, image, portion, price, setModal}) => {

  const handleLeanMore = () => {
    setModal({
      dish: {
        id: id,
        title: title,
        desc: desc,
        image: image,
        portion: portion,
        price: price,
      },
      visible: true,
    })
  }

  return (
    <S.MenuItemC>
      <S.MenuItemHeroC>
        <S.MenuItemHero src={image}/>
      </S.MenuItemHeroC>
      <S.ItemTitle>
        {title}
      </S.ItemTitle>
      <S.ItemDesc>
        {desc}
      </S.ItemDesc>
      <S.AddCartButton onClick={handleLeanMore} type='button'>Mais detalhes</S.AddCartButton>
    </S.MenuItemC>
  )
}

export default MenuItem
