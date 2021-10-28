import styled from 'styled-components'

const Header = styled.div`
    padding: 60px 0 96px;
`

const LabelHeaderText = styled.div`
    margin-bottom: 12px;
    font-size: 24px;
    line-height: 1.5;
    font-weight: 500;
    color: ${props => props.theme.colorsDark.fonts.Secondary};
`

const HeaderTextH1 = styled.h1`
    font-size: 45px;
    font-weight: 500;
    margin: 0;
    color: ${props => props.theme.colorsDark.fonts.Primary};
    @media only screen and (min-width: 564px) {
        & {
            font-size: 72px;
        }
    }
`

export default function HeaderText() {
    return (
        <Header>
            <div>
                <LabelHeaderText>
                    <span>Jobriver</span>
                </LabelHeaderText>
                <div>
                    <HeaderTextH1>
                        <span>Premium Technology & SaaS Template</span>
                    </HeaderTextH1>
                </div>
            </div>
        </Header>
    )
}
