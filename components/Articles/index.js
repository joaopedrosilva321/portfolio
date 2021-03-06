import styled from 'styled-components'
import Image from 'next/image'

import Link from 'next/link'

import thumbnail from '../../assets/farfetch/thumbnail.jpg'
import thumbnail1 from '../../assets/workana/thumbnail1.jpg'

const ArticleContainer = styled.div`
    max-width: 1024px;
    // max-height: 352px;
    cursor: pointer;
    @media only screen and (min-width: 564px) {
        & {
            margin: 32px 0;
            display: flex;
        }
    }
`
const ArticleDescription = styled.p`
    color: ${props => props.theme.colorsDark.fonts.Quaternary};
    font-weight: 300;
`
const ArticleTitle = styled.h2`
    color: ${props => props.theme.colorsDark.fonts.Secondary};
    font-weight: 500;
`
const ArticleImage = styled.article`
    // background: ${props => props.theme.colorsDark.background.Tertiary};
    border-radius: 8px;
    width: 90vw;
    // height: 504px;
    margin: 0 auto;
    @media only screen and (min-width: 564px) {
        & {
            width: 688px;
            height: 504px;
        }
    }
    overflow: hidden;
`
// const ArticleTags = styled.div`
//     background: ${props => props.theme.colorsDark.background.Quinary};
//     padding: 7px 12px;
//     border-radius: 8px;
//     font-size: 12px;
//     color: ${props => props.theme.colorsDark.fonts.Secondary};
//     margin-right: 8px;
// `


export default function Articles() {
    return (
        <div id="articles" style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: "wrap" }}>
            <div>
                <Link href="/farfetch">
                    <ArticleContainer>
                        <div>
                            <ArticleImage>
                                <img style={{width: '100%'}}  src={thumbnail.src} alt="" />
                            </ArticleImage>
                        </div>
                        <div style={{ margin: '0 0 0 24px' }}>
                            <div>
                                <ArticleTitle>Farfetch</ArticleTitle>
                            </div>
                            <div>
                                <ArticleDescription>
                                    <p>Farfetch ?? uma refer??ncia mundialmente nas lojas online em rela????o ?? moda de grife</p>
                                    <p>Sem perder suas principais caracter??sticas e mantendo a originalidade. Fizemos uma vers??o com design moderno e melhorando a experi??ncia do usu??rio...</p>
                                </ArticleDescription>
                            </div>
                        </div>
                    </ArticleContainer>
                </Link>
            </div>
            <div>
                <Link href="/workana">
                    <ArticleContainer>
                        <div style={{ margin: '0 24px' }}>
                            <div>
                                <ArticleTitle>Workana</ArticleTitle>
                            </div>
                            <div>
                                <ArticleDescription>
                                    <p>Workana tem um grande papel no mercado de trabalho de freelancer, com foco nas contrata????es de trabalhadores independentes na plataforma</p>
                                    <p>Particularmente, tenho algumas dificuldades nas cores do site em quest??o. Ent??o decidir criar a minha vers??o destacando as partes que acho ter mais import??ncia e ofuscando tudo que for secund??rio...</p>
                                </ArticleDescription>
                            </div>
                        </div>
                        <div>
                            <ArticleImage>
                                <img style={{width: '100%'}} src={thumbnail1.src} alt="" />
                            </ArticleImage>
                        </div>
                    </ArticleContainer>
                </Link>
            </div>
        </div>
    )
}