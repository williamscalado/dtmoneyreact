import logoImg from '../../assets/logo.png'
import { ButtonsHeader, Conteiner, Content, ContentButtons } from './style'

export function Header() {

    return (
        <Conteiner>
            <Content>
                <img src={logoImg} id="logo" alt="My Money " />                
                <ContentButtons>
                    <ButtonsHeader>Nova categoria</ButtonsHeader> 
                    <ButtonsHeader>Sair</ButtonsHeader> 
                </ContentButtons>
                 </Content>
        </Conteiner>

    )
}