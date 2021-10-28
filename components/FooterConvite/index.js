import styled from 'styled-components'

const StyleFonte = styled.h1`
    margin-top: 0px;
    margin-bottom: 0px;
    color: ${props => props.theme.colorsDark.fonts.Primary};
    font-size: 48px;
    line-height: 55px;
    font-weight: 500;
    letter-spacing: -0.03em;
    max-width: 620px;
    margin: 0 auto;
`
const StyleFonteSpan = styled.span`
    color: rgb(243, 206, 177);
    font-size: 48px;
    line-height: 1;
    font-weight: 500;
    margin: 48px auto auto;
    max-width: 620px;
    display: block;
`

export default function FooterConvite() {
    return (
        <div style={{margin: "144px 0"}}>
            <div>
                <StyleFonte>
                Deixe-me saber se você deseja falar sobre uma possível colaboração. Estou disponível para trabalho freelance.
                </StyleFonte>
            </div>
            <div>
                <a>
                    <StyleFonteSpan>Vamos projetar seu aplicativo</StyleFonteSpan>
                </a>
            </div>
        </div>
    )
}