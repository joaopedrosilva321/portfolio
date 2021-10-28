import styled from 'styled-components';

import Iphone from '../../../IphoneX'

const Header = styled.div`
    padding: 60px 0 96px;
`

const HeaderContainer = styled.div`

    @media only screen and (min-width: 920px) {
    & {
        display: flex;
        justify-content: space-around;
    }
`

const LabelHeaderImage = styled.div`
    // margin-bottom: 48px;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
    color: ${props => props.theme.colorsDark.fonts.Quaternary};
`

const HeaderImageH1 = styled.h1`
    font-size: 36px;
    font-weight: 500;
    // margin: 0;
    margin: 0 0 24px;
    color: ${props => props.theme.colorsDark.fonts.Primary};
    @media only screen and (min-width: 564px) {
        & {
            font-size: 64px;
        }
`

const HeaderImageContent = styled.div`
    margin: 0 auto;
    @media only screen and (min-width: 920px) {
        & {
            margin: 0;
            margin-right: 56px;
            max-width: 504px;
            font-size: 64px;
        }
    }
`


export default function HeaderImage({iphone, children}) {
    return (
        <Header>
            <HeaderContainer>
                <HeaderImageContent style={{marginBottom: 16}}>
                    <div>
                        <HeaderImageH1>
                            <span>A punch line for your project</span>
                        </HeaderImageH1>
                    </div>
                    <LabelHeaderImage>
                        <span>this is a subtitle line. I am just typing more to fill in 2 lines.</span>
                    </LabelHeaderImage>
                    {children}
                </HeaderImageContent>

                <Iphone>
                    {iphone}
                </Iphone>

            </HeaderContainer>
        </Header >
    )
}