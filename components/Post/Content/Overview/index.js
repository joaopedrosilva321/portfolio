import styled from "styled-components"

const ColorPrimary = styled.div`
    color: ${props => props.theme.colorsDark.fonts.Primary};
`
const ColorSecondary = styled.div`
    color: ${props => props.theme.colorsDark.fonts.Quaternary};
    font-weight: 100;
    letter-spacing: .5px;
    line-height: 1.4;
`

const ContainerPrimary = styled.div`
    max-width: 489px
`

const Flex = styled.div`
    display: flex;
    margin: 16px 0;
`

export default function Overview({title='Overview', children='', tags=[], duration='', role='', styles={}}) {
    return (
        <div style={styles}>
            <ContainerPrimary>
                <ColorPrimary>
                    <h2 style={{margin: 0, fontSize: 48}}>{title}</h2>
                </ColorPrimary>
            </ContainerPrimary>
        </div>
    )
}