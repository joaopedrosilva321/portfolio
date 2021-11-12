import styled from 'styled-components'

import Link from 'next/link'

import thumbnail from '../../assets/farfetch/thumbnail.jpg'
import thumbnail1 from '../../assets/farfetch/thumbnail1.jpg'

const ArticleContainer = styled.div`
    max-width: 1024px;
    // max-height: 352px;
    margin: 32px 0;
    display: flex;
    cursor: pointer;
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
    width: 688px;
    height: 504px;
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
        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: "wrap" }}>
            <div>
                <Link href="/farfetch">
                    <ArticleContainer>
                        <div>
                            <ArticleImage>
                                <img src={thumbnail.src} alt="" />
                            </ArticleImage>
                        </div>
                        <div style={{ margin: '0 0 0 24px' }}>
                            <div>
                                <ArticleTitle>My very first article</ArticleTitle>
                            </div>
                            <div>
                                <ArticleDescription>Fill your Project brief here. it can be the outcome of the project, or some success metrics, or a cheesy tagline.</ArticleDescription>
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
                                <ArticleTitle>My very first article</ArticleTitle>
                            </div>
                            <div>
                                <ArticleDescription>Fill your Project brief here. it can be the outcome of the project, or some success metrics, or a cheesy tagline.</ArticleDescription>
                            </div>
                        </div>
                        <div>
                            <ArticleImage>
                                <img src={thumbnail1.src} alt="" />
                            </ArticleImage>
                        </div>
                    </ArticleContainer>
                </Link>
            </div>
        </div>
    )
}