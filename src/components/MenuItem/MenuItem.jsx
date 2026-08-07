import * as S from './styled'


import Image from '../../assets/image-3.png'

const MenuItem = () => {
  return (
    <S.MenuItemC>
      <S.MenuItemHeroC>
        <S.MenuItemHero src={Image}/>
      </S.MenuItemHeroC>
      <S.ItemTitle>
        Pizza Marguerita
      </S.ItemTitle>
      <S.ItemDesc>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </S.ItemDesc>
      <S.AddCartButton>Adicionar ao carrinho</S.AddCartButton>
    </S.MenuItemC>
  )
}

export default MenuItem
