import { useEffect, useState } from 'react'

import styled, { keyframes } from 'styled-components';

import { useRouter } from 'next/router'

// import HeaderImage from '../../components/Post/Header/Image'
import Aindanaosei from '../../components/Post/Content/Aindanaosei'
import Nav from '../../components/Nav'
import CicleScore from '../../components/CicleScore'
// import SpeedInput from '../../components/SpeedInput'
import AnalyticsHighlight from '../../components/AnalyticsHighlight'
import Iphone from '../../components/IphoneX'
import FooterConvite from '../../components/FooterConvite'
import Footer from '../../components/Footer'
// import { filterGooglePageSpeed } from '../../utils/filterGooglePageSpeed'



const Header = styled.div`
    padding: 64px 0;
`

const HeaderContainer = styled.div`

    @media only screen and (min-width: 920px) {
    & {
        display: flex;
        justify-content: space-around;
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

const AnimationShow = styled.div`

  @keyframes load {
    from {
        left: -150px;
    }
    to   {
        left: 100%;
    }
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    // left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(to right, transparent 0%, rgba(41, 41, 41,.2) 50%, transparent 100%);
    animation: load 1.5s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
  }

  overflow: hidden;
  animation: ${frameShow} .200s linear ${props => props.inicioAnimacao || '0'}s 1 normal both, load 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
  transform-origin: 50% 50%; 
  width: ${props => props.styles.width || '35px'};
  height: ${props => props.styles.height || '35px'};
  margin: ${props => props.styles.margin || ''};
  background: ${props => props.styles.background || '#373737'};
  border-radius: ${props => props.styles.borderRadius || '8px'};
  
`

const LazerScanner = styled.div`

	width: 100%;
	height: 3px;
	background-color: #888;
  opacity: 0.7;
  position: absolute;
  box-shadow: 0px 0px 8px 5px rgba(136, 136, 136, 0.4);
  top:50%;
  animation: scan 1.5s linear ${props => props.inicioAnimacao || '0'}s infinite alternate-reverse;
  z-index: 1;
  top: -35px;


@keyframes scan {
  to {
    top: 0%;
  }  
  from {
    top: 90%;
  }
}
`

const ShadowIphone = styled.div`
  background: linear-gradient(to bottom, transparent , #111 310px) border-box; 
  position: absolute;
  z-ndex: 1;
  width: 100%;
  height: 100%;
`

const Input = styled.input`
    width: 100%;
    padding: 12px 16px;
    border-width: 0;
    border-radius: 4px;
    outline: 0;
    background: transparent;
    color: #888;
    fontSize: 14;
`

export default function Projects() {

  const [url, setUrl] = useState('');

  // Token verify
  const [tokenSite, setTokenSite] = useState('');

  // Animações
  const [inicioAnimationLoading, setInicioAnimationLoading] = useState(1);
  const [animationLoading, setAnimationLoading] = useState(false)

  // Dados
  const [dataInsights, setDataInsights] = useState()

  // Erros
  const [errProcess, setErrProcess] = useState()


  const site = {
    development: 'http://localhost:3000',
    production: 'https://faustos.vercel.app'
  }['development']



  const router = useRouter()



  const gerarToken = () => {
    const token = Math.random().toString(36).substr(2);
    setTokenSite(token)
    return token
  }



  useEffect(() => {

    if (router.query.url) handleSubmit();

  }, [router.isReady])



  const handleSubmit = async (e) => {


    try {
      // gerando e adiconando token da sessão
      const token = gerarToken()

      // resetando todos os erros antes de iniciar uma nova verificação
      setErrProcess()


      // pegando o endereço do input ou da barra de pesquisa
      let uri = url || router.query.url;
      // let uri = url

      // validando se existe url
      if (uri === undefined) throw 'Url invalida';

      // verificando se existe http|https
      if (!uri.match('(^[a-z]+[:])')) {
        uri = "http://" + uri
      }

      window.history.pushState("object or string", "Title", `/pagespeed?url=${encodeURIComponent(uri)}`);
      setUrl(uri)

      var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator


      // alerta de uri não valida
      if (!pattern.test(uri)) throw 'Url invalida';



      // button cancelar promises
      setAnimationLoading(e => !e)


      const mixPromiseArray = [
        fetch(`${site}/api/scannergoogle?url=${uri}`), 
        fetch(`${site}/api/scanner?url=${uri}`)
      ]


      const response = await Promise.all(mixPromiseArray)

      response.map(e => { if(!e.ok) throw '' } )


      const lighthouse = await response[0].json();
      const data = await response[1].json()


      const dados = {
        'token': token,
        'antes': lighthouse,
        'depois': data
      }

      setDataInsights(dados)
      setAnimationLoading(false)




    } catch (e) {
      setErrProcess({ err: e, code: 400 });
      setAnimationLoading(false)
    }

    return

  }



  return (
    <>
      <Nav />
      <Header>
        <HeaderContainer>
          <HeaderImageContent style={{ width: '100%', textAlign: 'center' }}>
            <div>
              <HeaderImageH1>
                <span>A punch line for your project</span>
              </HeaderImageH1>
            </div>
            <LabelHeaderImage>
              <span>this is a subtitle line. I am just typing more to fill in 2 lines.</span>
            </LabelHeaderImage>
            <form onSubmit={e => { e.preventDefault(), handleSubmit(e) }}>
              <div style={{ display: 'flex', border: '1px solid #888', borderRadius: 8, height: 48, fontSize: 16 }}>
                <div style={{ width: '100%', display: 'flex', alignContent: 'center' }}>
                  {/* <SpeedInput disabled={!animationLoading ? false : true} styles={{ background: 'transparent', color: '#888', fontSize: 14 }} setValue={setUrl} value={url} /> */}
                  <Input disabled={!animationLoading ? false : true} onChange={e => setUrl(e.target.value)|| url} value={url} type="text" placeholder="Insira uma URL do seu site aqui" />
                </div>
                <div>
                  {
                    !animationLoading
                      ? <ButtonSend >Analizar</ButtonSend>
                      : <ButtonSend onClick={e => { e.preventDefault(), gerarToken(), setAnimationLoading(false) }} style={{ color: '#ff4e42', background: 'transparent' }}>Cancelar</ButtonSend>
                  }

                </div>
              </div>
            </form>
            {/* <AnalyticsHighlight /> */}

            {errProcess ? <div style={{ fontSize: 14, textAlign: 'left', color: '#888', fontWeight: 200, width: '90%', margin: '24px auto' }}><p style={{ margin: 0 }}>Verifique se você está testando o URL correto e se o servidor está respondendo de forma adequada a todas as solicitações. erro: {errProcess.err} code: {errProcess.code}</p></div> : ''}

          </HeaderImageContent>

          <Iphone>
            <ShadowIphone />
            {
              dataInsights && tokenSite == dataInsights.token && dataInsights.antes.imagens['final-screenshot'] ? <img src={dataInsights.antes.imagens['final-screenshot']} style={{ width: '100%', margin: '-25px 0 0 0' }} /> : 
              <>
                <LazerScanner inicioAnimacao={inicioAnimationLoading + 0.5} style={{ display: !animationLoading ? 'none' : 'block' }} />


                <AnimationHide inicioAnimacao={inicioAnimationLoading + .5}>

                  <CicleScore
                    err={errProcess ? '!' : null}
                    classNames={animationLoading ? 'animationFrame' : ''}
                    porcentagem={97}
                    styles={{ display: !animationLoading ? 'flex' : 'none', margin: "32px auto 16px", justifyContent: 'center' }}
                  />

                </AnimationHide>
                <div style={{ margin: '8px 16px', display: !animationLoading ? 'none' : 'block' }}>
                  <div>
                    <AnimationShow inicioAnimacao={inicioAnimationLoading - .5} styles={{ width: '100%', height: '120px', borderRadius: '8px' }} />
                  </div>
                  <div style={{ display: 'flex', marginTop: 8 }}>
                    <div style={{ display: 'flex' }}>
                      <AnimationShow inicioAnimacao={inicioAnimationLoading - .4} styles={{ width: '18px', height: '18px', borderRadius: '50%' }} />
                      <AnimationShow inicioAnimacao={inicioAnimationLoading - .3} styles={{ width: '80px', height: '18px', borderRadius: '8px', margin: '0 0 0 8px' }} />
                    </div>
                    <div>
                      <AnimationShow inicioAnimacao={inicioAnimationLoading - .2} styles={{ width: '40px', height: '18px', borderRadius: '8px', margin: '0 0 0 32px' }} />
                    </div>
                  </div>
                  <div>
                    <AnimationShow inicioAnimacao={inicioAnimationLoading - .1} styles={{ width: '100%', height: '130px', borderRadius: '8px', margin: '24px 0 0 0', background: 'linear-gradient(#333, #111 125px)' }} />
                  </div>
                </div>
              </>
            }
          </Iphone>

        </HeaderContainer>
      </Header >

      <div>
        {
          dataInsights && tokenSite == dataInsights.token ?
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
              <AnalyticsHighlight data={dataInsights.antes.audits} textValue='Antes' />
              <AnalyticsHighlight data={dataInsights.depois.audits} textValue='Depois' inverse={true} />
            </div> : ''
        }
      </div>
      <Aindanaosei />
      <FooterConvite />
      <Footer />
    </>
  )
}