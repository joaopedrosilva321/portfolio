import styled from 'styled-components'

const Framing = styled.div`
    margin: 60px 0 96px;
`

const LabelHeaderImage = styled.div`
    margin-bottom: 48px;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
    color: ${props => props.theme.colorsDark.fonts.Quaternary};
`

const HeaderImageH1 = styled.h3`
    font-size: 36px;
    font-weight: 500;
    // margin: 0;
    color: ${props => props.theme.colorsDark.fonts.Primary};
    @media only screen and (min-width: 564px) {
        & {
            font-size: 58px;
        }
`

const Content = styled.div`
    max-width: 504px;
    margin: 0 auto;
    text-align: center;
`

const ContentFraming = styled.div`
    padding: 24px;
    background: #181818;
    color: ${props => props.theme.colorsDark.fonts.Tertiary};
    border-radius: 24px;
    max-width: 350px;
    margin: 8px;
`

const ContainerFraming = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 736px;
    margin: auto;
    justify-content: center;
`

export default function Aindanaosei() {
    return (
        <Framing>
            <Content>
                <HeaderImageH1>
                    <span>3 ... 2 ... 1 ... Se foi</span>
                </HeaderImageH1>
                <LabelHeaderImage>
                    <span>Se você está procurando algo no seu telefone, quanto tempo você vai esperar se a página demorar mais do que alguns segundos para carregar? </span>
                </LabelHeaderImage>
            </Content>
            <ContainerFraming>
                <ContentFraming>
                    <div>
                        <div style={{fontSize: 14, marginBottom: 24}}>
                            <span>Google</span>
                        </div>
                        <div style={{fontSize: 18, fontWeight: 500}}>
                            <span>53% das visitas provavelmente serão abandonadas se as páginas demorarem mais de 3 segundos para carregar</span>
                        </div>
                        <div style={{fontSize: 12, marginTop: 16}}>
                            <span>Google</span>
                        </div>
                    </div>
                </ContentFraming>
                <ContentFraming>
                    <div>
                        <div style={{fontSize: 14, marginBottom: 24}}>
                            <span>Google</span>
                        </div>
                        <div style={{fontSize: 18, fontWeight: 500}}>
                            <span>Uma em cada duas pessoas espera que uma página carregue em menos de 2 segundos</span>
                        </div>
                        <div style={{fontSize: 12, marginTop: 16}}>
                            <span>Google</span>
                        </div>
                    </div>
                </ContentFraming>
                <ContentFraming>
                    <div>
                        <div style={{fontSize: 14, marginBottom: 24}}>
                            <span>Google</span>
                        </div>
                        <div style={{fontSize: 18, fontWeight: 500}}>
                            <span>46% das pessoas afirmam que aguardar o carregamento das páginas é o que mais desgostam ao navegar na web em dispositivos móveis</span>
                        </div>
                        <div style={{fontSize: 12, marginTop: 16}}>
                            <span>Google</span>
                        </div>
                    </div>
                </ContentFraming>
                <ContentFraming>
                    <div>
                        <div style={{fontSize: 14, marginBottom: 24}}>
                            <span>Google</span>
                        </div>
                        <div style={{fontSize: 18, fontWeight: 500}}>
                            <span>A Amazon descobriu que apenas 100 milissegundos de tempo de carregamento extra custam 1% nas vendas</span>
                        </div>
                        <div style={{fontSize: 12, marginTop: 16}}>
                            <span>Google</span>
                        </div>
                    </div>
                </ContentFraming>
                {/* {
                    [
                        { key: 1, origin: "Google", content: "53% das visitas provavelmente serão abandonadas se as páginas demorarem mais de 3 segundos para carregar" },
                        { key: 2, origin: "Google", content: "Uma em cada duas pessoas espera que uma página carregue em menos de 2 segundos" },
                        { key: 3, origin: "Google", content: "46% das pessoas afirmam que aguardar o carregamento das páginas é o que mais desgostam ao navegar na web em dispositivos móveis" },
                        { key: 4, origin: "Forbes", content: "A Amazon descobriu que apenas 100 milissegundos de tempo de carregamento extra custam 1% nas vendas" }
                    ].map(({ key, content, origin }) =>
                        <ContentFraming key={key}>
                            <div>
                                <div><span>{origin}</span></div>
                                <div><span>{content}</span></div>
                            </div>
                        </ContentFraming>
                    )

                } */}
            </ContainerFraming>

        </Framing>
    )
}