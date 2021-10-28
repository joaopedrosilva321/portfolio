import styled from "styled-components";

import Image from "next/image"

import ImagemProfile from '../../public/a.png'

const ImagemContant = styled.div`
width: 160px;
height: 160px;
// margin-bottom: 34px;
border-radius: 50%;
overflow: hidden;
`

const H1 = styled.h1`
font-size: 48px;
font-weight: 500;
letter-spacing: -0.03em;
line-height: 1.05;
max-width: 840px;
text-align: center;
margin-bottom: 48px;
margin: 0 auto 48px auto;
color: ${props => props.theme.colorsDark.fonts.Primary};
@media only screen and (min-width: 564px) {
    & {
        font-size: 80px;
    }
  }
`

const H3 = styled.h3`
font-size: 32px;
line-height: 1;
font-weight: 500;
letter-spacing: -0.03em;
max-width: 840px;
text-align: center;
color: ${props => props.theme.colorsDark.fonts.Secondary};
margin: 32px auto;
`

const P = styled.p`
max-width: 540px;
margin-bottom: 48px;
color: ${props => props.theme.colorsDark.fonts.Quaternary};
font-size: 24px;
line-height: 1.4;
font-weight: 400;
letter-spacing: 0.01em;
text-align: center;
margin: 0 auto;
`

export default function Header() {
    return (
        <div style={{padding: "60px 3% 96px"}}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <ImagemContant>
                    <Image width={160} height={160} src={ImagemProfile} />
                </ImagemContant>
            </div>
            <div>
                <H3>
                    <span>Hi, I’m Matt</span>
                </H3>
            </div>
            <div>
                <H1>
                    <span>Building digital products, brands, and experience.</span>
                </H1>
            </div>
            <div>
                <P>
                    <span>a <strong>Product Designer</strong> and <strong>Visual Developer</strong> in SF. I specialize in UI/UX Design, Responsive Web Design, and Visual Development.</span>
                </P>
            </div>
        </div>
    )
}