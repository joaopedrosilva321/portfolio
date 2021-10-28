import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const CicleScoreContainer = styled.div`
    // width: 120px;
    position: relative;
`

const CicleScorePontos = styled.div`
    color: red;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin: -1px 0;
    font-weight: 600;
`

const CicleScoreSvg = styled.svg`stroke-linecap: round;`


// 3.4837 * 
const cicleScorePorcentagem = value => keyframes`to { stroke-dasharray: ${3.4837 * value}px, 351.858px; } `

// Set a porcetagem do CicleScore
// const porcentagem = 97;

// Set a velocidade da animação 


const CicleScoreAnim = styled.circle`
    fill: none;
    transform-origin: 50% 50%;
    animation: ${props => cicleScorePorcentagem(props.value)} ${props => props.velocidadeDaAnimacao}s ease forwards;
    animation-delay: 250ms;
    stroke: ${props => props.value <= 49 ? '#ff4e42' : (props.value >= 50 && props.value <= 89 ? '#ffa400' : '#0cce6b')};
`



export default function CicleScore({ styles=null, porcentagem = null, duration = 2, width, placeholder = true, classNames=null, value = null, err = null }) {


    const [valuePorcentagem, setValuePorcentagem] = useState(porcentagem)

    useEffect(() => {

        let inicio = 0;

        if (inicio === porcentagem) return


        let timer = setInterval(() => {
            inicio += 1;
            setValuePorcentagem(inicio)
            if (inicio === porcentagem) clearInterval(timer)
        }, duration);

    }, [porcentagem])


    const fontsize = width / 2.8

    return (
        <div style={styles} className={classNames}>
            <CicleScoreContainer style={{ width: (width || 120) + 'px', height: (width || 120) + 'px' }} >
                <CicleScoreSvg viewBox="0 0 120 120">
                    <circle r="56" cx="60" cy="60" strokeWidth="8" style={{ opacity: 0.1 }} />
                    <CicleScoreAnim value={err ? 100 : porcentagem} velocidadeDaAnimacao={duration} r="56" cx="60" cy="60" strokeWidth="8" style={{ stroke: err ? '#ff4e42' : '', strokeDasharray: "0 352", transform: "rotate(-87.9537deg)" }} />
                </CicleScoreSvg>
                {
                    placeholder ?
                        <CicleScorePontos style={{ fontSize: fontsize || '42px' }}>
                            <span>{ (value || err) || valuePorcentagem}</span>
                        </CicleScorePontos> : ''
                }
            </CicleScoreContainer>
        </div>
    )


}