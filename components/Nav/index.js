import styled from 'styled-components'

import { useState } from 'react'

const Flex = styled.div`
    display: flex;
`

const NavContainer = styled.nav`
    height: 112px;
    display: flex;
    align-items: center;
    // padding: 0 24px;
    max-width: 1024px;
    justify-content: space-between;
    margin: 0 24px;
    @media only screen and (min-width: 564px) {
        & {
            margin: auto;
        }
    }
`

const Logo = styled.div`
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.03em;
    color: ${props => props.theme.colorsDark.fonts.Quaternary};
`

const NavContentsMobile = styled.div`
    width: 32px;
    height: 64px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    @media only screen and (min-width: 564px) {
        & {
            display: none;
        }
    }
`

const NavContents = styled.div`
    justify-content: space-between;
`

const NavContentsUl = styled.ul`
    display: block;
    position: absolute;
    left: 0px;
    padding: 0px;
    width: 100%;
    background: #181818;
    margin-top: 8px;
    z-index: 1;
    @media only screen and (min-width: 564px) {
        & {
            background: transparent;
            position: relative;
            display: flex !important;
            margin: 0;
        }
    }
    & > li{
        border-bottom: 1px solid transparent;
    }
    & > li:hover{
        border-bottom: 1px solid rgba(254,254,254,0.1);
    }
`

const NavContentsLink = styled.a`
    padding: 20px 30px;
    font-weight: 500;
    width: inherit;
    display: block;
`

export default function Nav() {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <NavContainer>
            <div>
                <a href="/">
                    <Logo as={Flex}>
                        <div style={{ width: 64, marginRight: 24, textAlign: 'center', display: "none" }}>
                            <span>||</span>
                        </div>
                        <div>
                            {/* <span>hello@jpdevs.com</span> */}
                            <span>João Pedro Silva</span>
                        </div>
                    </Logo>
                </a>
            </div>
            <div>
                <NavContents>
                    <NavContentsMobile onClick={() => setToggleMenu(e => !e)}>
                        <svg viewBox="-4 0 26 20" style={{ width: 23, fill: "#BDBDBD" }}>
                            <rect height="2" rx="1" width="18" y="9" />
                            <rect y="4" rx="1" height="2" width="18" />
                            <rect rx="1" height="2" width="18" y="14" />
                        </svg>
                    </NavContentsMobile>
                    <NavContentsUl style={{ display: toggleMenu ? 'block' : 'none', color: '#BDBDBD' }}>
                        <li>
                            <NavContentsLink href="/">
                                <span>Inicio</span>
                            </NavContentsLink>
                        </li>
                        <li>
                            <NavContentsLink href="./#sobre">
                                <span>Sobre</span>
                            </NavContentsLink>
                        </li>
                        <li>
                            <NavContentsLink href="./#articles">
                                <span>Artigos</span>
                            </NavContentsLink>
                        </li>
                        <li>
                            <NavContentsLink href="#">
                                <span>Experiments</span>
                            </NavContentsLink>
                        </li>
                    </NavContentsUl>
                </NavContents>
            </div>
        </NavContainer>
    )
}