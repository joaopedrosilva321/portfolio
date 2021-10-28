import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
`
const FooterContainer = styled.div`
    justify-content: space-around; 
    flex-wrap: wrap;
    color: ${props => props.theme.colorsDark.fonts.Quaternary};
    margin-top: 68px;
    @media only screen and (min-width: 564px) {
        & {
            display: flex;
        }
    }
`

const FooterLink = styled.a`
    padding: 20px 0;
    cursor: pointer;
    display: block;
    margin: 0 auto;
    @media only screen and (min-width: 564px) {
        & {
            display: flex;
            margin: 0;
            padding: 20px 40px;
        }
    }
`

const MenuFooter = styled.div`
    padding: 0;
    margin: 0;
    @media only screen and (min-width: 564px) {
        & {
            display: flex;
        }
    }
`

export default function Footer(){
    return(
        <FooterContainer>
            <FooterLink as="div" style={{ padding: "20px 0"}}>
                <span>© 2021 your name</span>
            </FooterLink>
            <div>
                <MenuFooter as="ul">
                    <li>
                        <FooterLink>
                            <span>Works</span>
                        </FooterLink>
                    </li>
                    <li>
                        <FooterLink>
                            <span>About</span>
                        </FooterLink>
                    </li>
                    <li>
                        <FooterLink>
                            <span>Articles</span>
                        </FooterLink>
                    </li>
                    <li>
                        <FooterLink>
                            <span>Experiments</span>
                        </FooterLink>
                    </li>
                </MenuFooter>
            </div>
        </FooterContainer>
    )
}