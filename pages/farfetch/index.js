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
import desktop1 from '../../assets/farfetch/desktop-1.jpg'
import desktop2 from '../../assets/farfetch/desktop-2.jpg'
import desktop3 from '../../assets/farfetch/desktop-3.jpg'
import desktop4 from '../../assets/farfetch/desktop-4.jpg'

import mobile1 from '../../assets/farfetch/X-1.jpg'
import mobile2 from '../../assets/farfetch/X-2.jpg'
import mobile3 from '../../assets/farfetch/X-3.jpg'
import mobile4 from '../../assets/farfetch/X-4.jpg'
import mobile5 from '../../assets/farfetch/X-5.jpg'
import mobile6 from '../../assets/farfetch/X-6.jpg'
import mobile7 from '../../assets/farfetch/X-7.jpg'
import mobile8 from '../../assets/farfetch/X-8.jpg'
import mobile9 from '../../assets/farfetch/X-9.jpg'
import mobile10 from '../../assets/farfetch/X-10.jpg'




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
            <Header title="Redesign & Lista Infinita" projeto="Farfetch" />
            <div>
                <OverviewStyle>
                    {/* <Overview/> */}
                    <div>
                        <h2 style={{ margin: 0, fontSize: 48, maxWidth: '489px', color: '#FFFFFF' }}><span>Overview</span></h2>
                    </div>
                    <TextOverView>
                        <div style={{ maxWidth: "489px", margin: 'auto 0' }}>
                            <p style={{ fontWeight: '100', letterSpacing: '.5px', lineHeight: '1.4', color: '#888', margin: '0 0 16px' }}>Farfetch é uma referência mundialmente nas lojas online em relação à moda de grife</p>
                            {/* <p style={{ letterSpacing: '.5px', fontWeight: '100', lineHeight: '1.4', color: '#888', margin: '0 0 16px' }}>Como se trata de uma loja conceito, informação e vendas são algo realmente importante</p> */}
                            {/* <p style={{ lineHeight: '1.4', letterSpacing: '.5px', fontWeight: '100', color: '#888', margin: '0 0 16px' }}>Quando entro em um site, gosto que ele me surpreenda, por que me dá mais vontade de <strong style={{ fontWeight: 500, color: '#89B6E7' }}>comprar</strong> ou <strong style={{ fontWeight: 500, color: '#89B6E7' }}>interagir</strong> com o mesmo</p> */}
                            <p style={{ lineHeight: '1.4', letterSpacing: '.5px', fontWeight: '100', color: '#888', margin: '0 0 16px' }}>Sem perder suas principais características e mantendo a originalidade. Fizemos uma versão com design moderno e melhorando a experiência do usuário</p>
                            <p style={{ lineHeight: '1.4', letterSpacing: '.5px', fontWeight: '100', color: '#888', margin: '0 0 16px' }}>A técnica de "lista infinita", vazando informações pela tela, ajuda o futuro comprador a ver mais itens do que ele iria ver normalmente, <strong style={{ fontWeight: 500, color: '#89B6E7' }}>aumentando</strong> as vendas. Muito usanda pelo <strong style={{ fontWeight: 500, color: '#89B6E7' }}>Tiktok</strong>, <strong style={{ fontWeight: 500, color: '#89B6E7' }}>Netflix</strong>, <strong style={{ fontWeight: 500, color: '#89B6E7' }}>Prime Video</strong>, etc...</p>
                            <p style={{ lineHeight: '1.4', letterSpacing: '.5px', fontWeight: '100', color: '#888', margin: '0 0 16px' }}>Quem nunca se pegou rolando uma lista dessas empresas, em busca de algo que não temos ideia do que seja</p>


                        </div>
                        <Iphone styles={{ width: '296px', height: '368px', shadow: '78%' }}>
                            {/* {console.log(imageHeader)} */}
                            <img style={{ width: '100%' }} src={mobile4.src} alt="" />
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
                                ['Loja', 'Farfetch', 'Figma'].map((data, id) => <span style={{ background: '#181818', fontSize: 15, padding: '4px 16px', borderRadius: 4, margin: '0 4px 0' }} key={id}>{data}</span>)
                            }
                        </div>
                    </div>

                    <div style={{ margin: '16px 0', display: 'flex' }}>
                        <div>
                            <h4 style={{ margin: 0, color: '#FFFFFF' }}>Role:</h4>
                        </div>
                        <div style={{ margin: '0 16px', color: '#888', letterSpacing: '.5px', lineHeight: 1.4, fontWeight: 100 }}>
                            <span>Redesign, Ux, Ui</span>
                        </div>
                    </div>
                    <div style={{ margin: '16px 0', display: 'flex' }}>
                        <div >
                            <h4 style={{ margin: 0, color: '#FFFFFF' }}>Duração:</h4>
                        </div>
                        <div style={{ margin: '0 16px', color: '#888', letterSpacing: '.5px', lineHeight: 1.4, fontWeight: 100 }}>
                            <span>3 dias</span>
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
                        <p>Planejando melhorarias, percebo não haver uma experiência moderna e divertida para o comprador. Com o <strong style={{ fontWeight: 500, color: '#89B6E7' }}>carregamento lento</strong>, e tendo que me acessar muitíssimo links, minha experiência ao navegar foi bem fraca</p>
                        <p>Quando pensamos em uma loja, o cliente normalmente chega com a intenção de compra. Mas a cada <strong style={{ fontWeight: 500, color: '#89B6E7' }}>segundo</strong> sem efetuar a compra, vai perdendo essa vontade</p>

                    </div>
                </div>
                <div style={{ padding: "16px 0" }}>
                    <div>
                        <h2 style={{ margin: 0, fontSize: 40, color: "#FFFFFF" }}>Solução</h2>
                    </div>
                    <div style={{ color: '#888', letterSpacing: .5, lineHeight: 1.4, fontWeight: 100 }}>
                        {/* <p>Sabendo que o cérebro humanos é capazes de indetificar uma imagem em <strong style={{fontWeight: 500,color: '#89B6E7'}}><a href="https://news.mit.edu/2014/in-the-blink-of-an-eye-0116" target="_blank">13 milissegundos</a></strong>, podemos aproveitar para mostrar produtos em um carrosel em uma velocidade que não deixe cansado ou entediado</p> */}
                        <p>Remodelamos o site com um carrossel no modo mobile(celular) usando as mesmas técnicas de grande empresas como o <strong style={{ fontWeight: 500, color: '#89B6E7' }}>Tiktok</strong>, <strong style={{ fontWeight: 500, color: '#89B6E7' }}>Netflix</strong>, <strong style={{ fontWeight: 500, color: '#89B6E7' }}>Prime Video</strong></p>
                        <p>Na versão de Desktop(Computador) deixando uma versão mais tradicional, tanto para ver as diferenças entre às duas versões, mas também mostrar o modo clássico que nós criamos com a nossa cara</p>
                        {/* <p></p> */}
                    </div>
                </div>
                <div style={{ padding: "16px 0" }}>
                    <div>
                        <h2 style={{ margin: 0, fontSize: 40, color: "#FFFFFF" }}>Cores</h2>
                    </div>
                    <div style={{ color: '#888', letterSpacing: .5, lineHeight: 1.4, fontWeight: 100 }}>
                        <p>Pode parecer vazio, meio sem cor. Mas é exatamente isso que queremos</p>
                        <p>Qualquer coisa que você coloque instantaneamente já vira um holofote sejam imagens, botões, etc. O site não disputa com o conteúdo, ele o ajuda a destacasse.</p>
                    </div>
                </div>
            </Proposta>

            <div style={{ maxWidth: '904px', margin: '0 auto' }}>
                <Proposta>
                    <h2 style={{ margin: 0, fontSize: 40, color: "#FFFFFF" }}>Mobile</h2>
                </Proposta>
                <div style={{ overflowX: 'scroll', margin: '32px 0' }}>
                    <div style={{ display: 'flex', width: 'max-content' }}>
                        <Iphone styles={{ margin: '0 24px 0', width: '296px', height: '550px' }}>
                            <img style={{ maxWidth: '100%' }} src={mobile1.src} alt="" />
                        </Iphone>
                        <Iphone styles={{ margin: '0 24px 0', width: '296px', height: '550px' }}>
                            <img style={{ maxWidth: '100%' }} src={mobile2.src} alt="" />
                        </Iphone>
                        {/* <Iphone styles={{ margin: '0 24px 0', width: '296px', height: '550px' }}>
                            <img style={{ maxWidth: '100%' }} src={mobile3.src} alt="" />
                        </Iphone> */}
                        <Iphone styles={{ margin: '0 24px 0', width: '296px', height: '550px' }}>
                            <img style={{ maxWidth: '100%' }} src={mobile4.src} alt="" />
                        </Iphone>
                        <Iphone styles={{ margin: '0 24px 0', width: '296px', height: '550px' }}>
                            <img style={{ maxWidth: '100%' }} src={mobile5.src} alt="" />
                        </Iphone>
                        <Iphone styles={{ margin: '0 24px 0', width: '296px', height: '550px' }}>
                            <img style={{ maxWidth: '100%' }} src={mobile6.src} alt="" />
                        </Iphone>
                        {/* <Iphone styles={{ margin: '0 24px 0', width: '296px', height: '550px' }}>
                            <img style={{ maxWidth: '100%' }} src={mobile7.src} alt="" />
                        </Iphone> */}
                        <Iphone styles={{ margin: '0 24px 0', width: '296px', height: '550px' }}>
                            <img style={{ maxWidth: '100%' }} src={mobile8.src} alt="" />
                        </Iphone>
                        <Iphone styles={{ margin: '0 24px 0', width: '296px', height: '550px' }}>
                            <img style={{ maxWidth: '100%' }} src={mobile9.src} alt="" />
                        </Iphone>
                        <Iphone styles={{ margin: '0 24px 0', width: '296px', height: '550px' }}>
                            <img style={{ maxWidth: '100%' }} src={mobile10.src} alt="" />
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
                        <Iphone styles={{ margin: '0 24px 0', width: '792px', height: '550px' }}>
                            <img style={{ maxWidth: '100%' }} src={desktop1.src} alt="" />
                        </Iphone>
                        <Iphone styles={{ margin: '0 24px 0', width: '792px', height: '550px' }}>
                            <img style={{ maxWidth: '100%' }} src={desktop2.src} alt="" />
                        </Iphone>
                        <Iphone styles={{ margin: '0 24px 0', width: '792px', height: '550px' }}>
                            <img style={{ maxWidth: '100%' }} src={desktop3.src} alt="" />
                        </Iphone>
                        <Iphone styles={{ margin: '0 24px 0', width: '792px', height: '550px' }}>
                            <img style={{ maxWidth: '100%' }} src={desktop4.src} alt="" />
                        </Iphone>
                    </div>
                </div>

            </div>
            <FooterConvite />
            <Footer />
        </>
    )
}