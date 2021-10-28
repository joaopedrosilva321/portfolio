import styled from 'styled-components'

const ArticleContainer = styled.div`
    max-width: 480px;
    // max-height: 352px;
    margin: 32px 0;
`
const ArticleDescription = styled.p`
    color: ${props => props.theme.colorsDark.fonts.Quaternary};
    font-weight: 300;
`
const ArticleTitle = styled.h3`
    color: ${props => props.theme.colorsDark.fonts.Secondary};
    font-weight: 500;
`
const ArticleImage = styled.article`
    background: ${props => props.theme.colorsDark.background.Tertiary};
    border-radius: 32px;
    width: 100%;
    height: 304px;
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
            {
                [1, 2, 3, 4].map(_ =>
                    <ArticleContainer key={_}>
                        <div>
                            <ArticleImage />
                        </div>
                        <div style={{marginTop: 28}}>
                            <div>
                                <ArticleTitle>My very first article</ArticleTitle>
                            </div>
                            <div>
                                <ArticleDescription>Fill your Project brief here. it can be the outcome of the project, or some success metrics, or a cheesy tagline.</ArticleDescription>
                            </div>
                            {/* <div style={{ display: 'flex' }} >
                                <ArticleTags>
                                    <a href="">
                                        <span>HCD</span>
                                    </a>
                                </ArticleTags>
                                <ArticleTags>
                                    <a href="">
                                        <span>Design Tool</span>
                                    </a>
                                </ArticleTags>
                                <ArticleTags>
                                    <a href="">
                                        <span>Process</span>
                                    </a>
                                </ArticleTags>
                            </div> */}
                        </div>
                    </ArticleContainer>
                )
            }
        </div>
    )
}