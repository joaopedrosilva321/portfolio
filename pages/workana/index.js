import styled, { keyframes } from 'styled-components';

// import HeaderImage from '../../components/Post/Header/Image'
import Aindanaosei from '../../components/Post/Content/Aindanaosei'
import Nav from '../../components/Nav'
import Iphone from '../../components/IphoneX'
import FooterConvite from '../../components/FooterConvite'
import Footer from '../../components/Footer'
import Header from '../../components/Post/Header/Text'
import Insights from '../../components/Post/Content/Insights'
import Overview from '../../components/Post/Content/Overview'

// img 
import desktop from '../../assets/workana/desktop-1.jpg'
import mobile1 from '../../assets/workana/X-1.jpg'
import mobile2 from '../../assets/workana/X-2.jpg'


const HeaderStyle = styled.div`
    padding: 64px 0;
`

const HeaderContainer = styled.div`

    @media only screen and (min-width: 920px) {
        & {
            display: flex;
            justify-content: space-around;
        }
    }
`

const LabelHeaderImage = styled.div`
    font-size: 16px;
    line-height: 1.5;
    font-weight: 200;
    color: #888;
    margin: 16px 0 32px;
`

const HeaderImageH1 = styled.h1`
    font-size: 36px;
    font-weight: 500;
    margin: 0;
    color: ${props => props.theme.colorsDark.fonts.Primary};
    @media only screen and (min-width: 564px) {
        & {
            font-size: 64px;
            height: 166px;
        }
    }
`

const HeaderImageContent = styled.div`
        margin: 0 auto 64px;
        @media only screen and (min-width: 920px) {
            & {
                margin: 0 auto;
                max-width: 504px;
                font-size: 64px;
            }
        }
`

const ButtonSend = styled.button`
    margin: 4px; 
    height: calc(100% - 8px); 
    width: 96px; 
    cursor: pointer; 
    background: #292929; 
    border: 0;
    border-radius: 4px; 
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    font-size: 11px;
`

const frameHide = keyframes`
    from {
        transform: scaleX(1) scaleY(1);
    } 
    to {
        transform: scaleX(0) scaleY(0);
        opacity: 0.000; 
        display: none;
    }
`;

const AnimationHide = styled.div`
    .animationFrame{
        animation: ${frameHide} .200s linear ${props => props.inicioAnimacao || '0'}s 1 normal both;
        transform-origin: 50% 50%; 
    }
`

const frameShow = keyframes`
    from {
    transform: scaleX(0) scaleY(0);
    opacity: 0.000; 
    }

    to {
    transform: scaleX(1) scaleY(1);
    opacity: 1.000; 
    } 
`;


const TextOverView = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    // align-items: center;
    margin: 24px 0;
    @media only screen and (min-width: 564px) {
        & {
            margin: 24px auto;
        }
    }
`;

const OverviewStyle = styled.div`
    max-width: 904px;
    margin: 24px 24px;
    @media only screen and (min-width: 564px) {
        & {
            margin: 64px auto;
        }
    }
`;

const Detalhes = styled.div`
    display: flex; 
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 16px 24px;
    max-width: 904px;
    @media only screen and (min-width: 564px) {
        & {
            margin: 16px auto;
        }
    }
`
const Proposta = styled.div`
    max-width: 904px; 
    margin: 64px 24px;
    @media only screen and (min-width: 564px) {
        & {
            margin: 16px auto;
        }
    }
`

export default function Projects() {


    return (
        <>
            <Nav />
            <Header title="Redesign & Cores" projeto="Workana" />
            <div>
                <OverviewStyle>
                    <div>
                        <h2 style={{ margin: 0, fontSize: 48, maxWidth: '489px', color: '#FFFFFF' }}><span>Overview</span></h2>
                    </div>
                    <TextOverView>
                        <div style={{ maxWidth: "489px", margin: 'auto 0' }}>
                            <p style={{ fontWeight: '100', letterSpacing: '.5px', lineHeight: '1.4', color: '#888', margin: '0 0 16px' }}>Workana tem um grande papel no mercado de trabalho de freelancer, com foco nas contratações de trabalhadores independentes na plataforma</p>
                            <p style={{ letterSpacing: '.5px', fontWeight: '100', lineHeight: '1.4', color: '#888', margin: '0 0 16px' }}>Particularmente, tenho algumas dificuldades nas cores do site em questão. Então decidir criar a minha versão destacando as partes que acho ter mais importância e ofuscando tudo que for secundário</p>
                            <p style={{ lineHeight: '1.4', letterSpacing: '.5px', fontWeight: '100', color: '#888', margin: '0 0 16px' }}>Esta técnica é muito usada por grandes players do mercado web, entre eles o <strong style={{ fontWeight: 500, color: '#89B6E7' }}>Youtube</strong>, a nova interface do <strong style={{ fontWeight: 500, color: '#89B6E7' }}>Facebook</strong>, <strong style={{ fontWeight: 500, color: '#89B6E7' }}> Twitter</strong>, etc.</p>
                            <p style={{ letterSpacing: '.5px', fontWeight: '100', lineHeight: '1.4', color: '#888', margin: '0 0 16px' }}>Não fazer essa otimização de <strong style={{ fontWeight: 500, color: '#89B6E7' }}>cores</strong>, é como entrar em uma loja, o atendente te ignorasse, você ficasse perdido com a quantidade de itens e acabar desistindo de comprar por perder a paciência</p>
                        </div>
                        <Iphone styles={{ width: '296px', height: '368px', shadow: '78%' }}>
                            {/* {console.log(imageHeader)} */}
                            <img style={{ width: '100%' }} src={mobile1.src} alt="" />
                        </Iphone>
                    </TextOverView>
                </OverviewStyle>
                <Detalhes>
                    <div style={{ margin: '16px 0', display: 'flex' }}>
                        <div >
                            <h4 style={{ margin: 0, color: '#FFFFFF' }}>Tags:</h4>
                        </div>
                        <div style={{ margin: '0 16px', color: '#888', letterSpacing: '.5px', lineHeight: 1.4, fontWeight: 100 }}>
                            {
                                ['Workana', 'Freelancer', 'Figma'].map((data, id) => <span style={{ background: '#181818', fontSize: 15, padding: '4px 16px', borderRadius: 4, margin: '0 4px 0' }} key={id}>{data}</span>)
                            }
                        </div>
                    </div>

                    <div style={{ margin: '16px 0', display: 'flex' }}>
                        <div>
                            <h4 style={{ margin: 0, color: '#FFFFFF' }}>Role:</h4>
                        </div>
                        <div style={{ margin: '0 16px', color: '#888', letterSpacing: '.5px', lineHeight: 1.4, fontWeight: 100 }}>
                            <span>Redesign, Cores, Ux, Ui</span>
                        </div>
                    </div>
                    <div style={{ margin: '16px 0', display: 'flex' }}>
                        <div >
                            <h4 style={{ margin: 0, color: '#FFFFFF' }}>Duração:</h4>
                        </div>
                        <div style={{ margin: '0 16px', color: '#888', letterSpacing: '.5px', lineHeight: 1.4, fontWeight: 100 }}>
                            <span>1 semanas</span>
                        </div>
                    </div>
                </Detalhes>

            </div>


            <Proposta>
                <div style={{ padding: "16px 0" }}>
                    <div>
                        <h2 style={{ margin: 0, fontSize: 40, color: "#FFFFFF" }}>Problema</h2>
                    </div>
                    <div style={{ color: '#888', letterSpacing: .5, lineHeight: 1.4, fontWeight: 100 }}>
                        <p>O design(interface) da <a href="https://www.workana.com" target="_blank" rel="noopener noreferrer"><strong style={{ fontWeight: 500, color: '#89B6E7' }}>Workana</strong></a> é lindo de se ver, isso temos que concordar. Mas, em seu conteúdo há muitas cores chamativas, e com isso pode ocasionar um incomodo em pessoas com alguma dificuldade visual</p>
                        <p></p>
                    </div>
                </div>
                <div style={{ padding: "16px 0" }}>
                    <div>
                        <h2 style={{ margin: 0, fontSize: 40, color: "#FFFFFF" }}>Solução</h2>
                    </div>
                    <div style={{ color: '#888', letterSpacing: .5, lineHeight: 1.4, fontWeight: 100 }}>
                        <p>Pensando nisso, destacamos em nossa interface as partes que achamos mais importantes(botão, menu, foto do perfil)</p>
                        <p>O botão <strong style={{ fontWeight: 500, color: '#89B6E7' }}>"contratar"</strong> destaca sua localização tendo uma cor única e chamativa na interface, ajudando o usuário há encontrar o botão de contratação do serviço em média de <strong style={{ fontWeight: 500, color: '#89B6E7' }}>1 segundo</strong></p>
                    </div>
                </div>
                <div style={{ padding: "16px 0" }}>
                    <div>
                        <h2 style={{ margin: 0, fontSize: 40, color: "#FFFFFF" }}>Técnica</h2>
                    </div>
                    <div style={{ color: '#888', letterSpacing: .5, lineHeight: 1.4, fontWeight: 100 }}>
                        <p>Pode parecer vazio, meio sem cor. Mas é exatamente isso que queremos</p>
                        <p>Qualquer coisa que você coloque instantaneamente já vira um holofote sejam imagens, botões, etc. O site não disputa com o conteúdo, ele o ajuda a destacasse</p>
                    </div>
                </div>
            </Proposta>

            <div style={{ maxWidth: '904px', margin: '0 auto' }}>
                <Proposta>
                    <h2 style={{ margin: 0 , fontSize: 40, color: "#FFFFFF" }}>Mobile</h2>
                </Proposta>
                <div style={{ overflowX: 'scroll', margin: '32px 0' }}>
                    <div style={{ display: 'flex', width: 'max-content' }}>
                        <Iphone styles={{ margin: '0 24px 0', width: '296px', height: '550px' }}>
                            <img style={{ maxWidth: '100%' }} src={mobile1.src} alt="" />
                        </Iphone>
                        <Iphone styles={{ margin: '0 24px 0', width: '296px', height: '550px' }}>
                            <img style={{ maxWidth: '100%' }} src={mobile2.src} alt="" />
                        </Iphone>
                    </div>
                </div>

            </div>
            <div style={{ maxWidth: '904px', margin: '0 auto' }}>
                <Proposta>
                    <h2 style={{ margin: 0, fontSize: 40, color: "#FFFFFF" }}>Desktop</h2>
                </Proposta>
                <div style={{ overflowX: 'scroll', margin: '32px 0' }}>
                    <div style={{ display: 'flex', width: '100%' }}>
                        <Iphone styles={{ margin: '0 24px 0', width: '792px', height: '450px' }}>
                            <img style={{ maxWidth: '100%' }} src={desktop.src} alt="" />
                        </Iphone>
                    </div>
                </div>

            </div>
            <FooterConvite />
            <Footer />
        </>
    )
}