import * as S from './styled';

import logoImage from '../../assets/logo.png'
import instaIcon from '../../assets/insta.png'
import faceIcon from '../../assets/face.png'
import twtterIcon from '../../assets/twitter.png'

const Footer = () => {
  return (
    <S.FooterC>
      <S.Logo src={logoImage} />
      <S.SocialMediaC>
        <S.SocialMediaIcon src={instaIcon} />
        <S.SocialMediaIcon src={faceIcon} />
        <S.SocialMediaIcon src={twtterIcon} />
      </S.SocialMediaC>
      <S.Copy>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. 
      </S.Copy>
    </S.FooterC>
  )
}

export default Footer
