import { useEffect, useState } from 'react';

import styled from 'styled-components';

import CicleScore from '../CicleScore';


const Label = styled.div`
    color: ${props => props.theme.colorsDark.fonts.Tertiary};
`

const Color = styled.div`
    color: ${props => props.value <= 49 ? '#ff4e42' : (props.value >= 50 && props.value <= 89 ? '#ffa400' : '#0cce6b')};
`
// Cor alternative
// #181818

export default function AnalyticsHighlight({ data, inverse = null, textValue }) {

    const [score, setScore] = useState(0)
    const [firstContentfulPaint, setFirstContentfulPaint] = useState({})
    const [speedIndex, setSpeedIndex] = useState({})
    const [largestContentfulPaint, setLargestContentfulPaint] = useState({})
    const [interactive, setInteractive] = useState({})
    const [totalBlockingTime, setTotalBlockingTime] = useState({})
    const [cumulativeLayoutShift, setCumulativeLayoutShift] = useState({})



    useEffect(() => {

        setScore(parseInt(data['score'] * 100))
        setFirstContentfulPaint(data['first-contentful-paint'])
        setSpeedIndex(data['speed-index'])
        setLargestContentfulPaint(data['largest-contentful-paint'])
        setInteractive(data['interactive'])
        setTotalBlockingTime(data['total-blocking-time'])
        setCumulativeLayoutShift(data['cumulative-layout-shift'])

    }, [data])

    return (
        <div>
            <div style={{ margin: 16, margin: '32px 0' }}>
                <div>
                    <CicleScore porcentagem={score} styles={{display: 'flex', justifyContent: 'center'}} />
                </div>
                <div style={{display: 'flex'}}>
                    <span style={{margin: 'auto', color: 'rgb(197, 200, 212)'}}>
                        <h2>{textValue}</h2>
                    </span>
                </div>
            </div>
            <div>
                
                <div>
                    <div style={{ background: '#181818', cursor: 'pointer', boxShadow: '0 0 3px rgb(29, 30, 34)', padding: '11px 16px', borderRadius: 8, margin: 16, width: 450 }}>
                        <div style={{ display: 'flex', position: 'relative', height: 32, flexDirection: inverse ? 'row-reverse' : '' }}>
                            {/* <div style={{ margin: 'auto 0', height: 19, paddingTop: 1 }}>
                                <svg viewBox="0 0 24 24" width="19" height="19" fill="#c5c8d4">
                                    <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                                </svg>
                            </div> */}
                            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', flexDirection: inverse ? 'row-reverse' : '' }}>
                                <Label style={{ margin: 'auto 8px', fontWeight: 600, color: '#c5c8d4', fontSize: 16 }}>
                                    <span>{firstContentfulPaint.title}</span>
                                </Label>
                                <div style={{ margin: 'auto 0', lineHeight: '1.8', fontSize: 15, fontWeight: 400 }}>
                                    <Color value={firstContentfulPaint.score * 100}><span>{firstContentfulPaint.displayValue}</span></Color>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div>
                    <div style={{ background: '#181818', cursor: 'pointer', boxShadow: '0 0 3px rgb(29, 30, 34)', padding: '11px 16px', borderRadius: 8, margin: 16, width: 450 }}>
                        <div style={{ display: 'flex', position: 'relative', height: 32, flexDirection: inverse ? 'row-reverse' : '' }}>
                            {/* <div style={{ margin: 'auto 0', height: 19, paddingTop: 1 }}>
                                <svg viewBox="0 0 24 24" width="19" height="19" fill="#c5c8d4">
                                    <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                                </svg>
                            </div> */}
                            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', flexDirection: inverse ? 'row-reverse' : '' }}>
                                <Label style={{ margin: 'auto 8px', fontWeight: 600, color: '#c5c8d4', fontSize: 16 }}>
                                    <span>{speedIndex.title}</span>
                                </Label>
                                <div style={{ margin: 'auto 0', lineHeight: '1.8', fontSize: 15, fontWeight: 400 }}>
                                    <Color value={speedIndex.score * 100}><span>{speedIndex.displayValue}</span></Color>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div>
                    <div style={{ background: '#181818', cursor: 'pointer', boxShadow: '0 0 3px rgb(29, 30, 34)', padding: '11px 16px', borderRadius: 8, margin: 16, width: 450 }}>
                        <div style={{ display: 'flex', position: 'relative', height: 32, flexDirection: inverse ? 'row-reverse' : '' }}>
                            {/* <div style={{ margin: 'auto 0', height: 19, paddingTop: 1 }}>
                                <svg viewBox="0 0 24 24" width="19" height="19" fill="#c5c8d4">
                                    <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                                </svg>
                            </div> */}
                            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', flexDirection: inverse ? 'row-reverse' : '' }}>
                                <Label style={{ margin: 'auto 8px', fontWeight: 600, color: '#c5c8d4', fontSize: 16 }}>
                                    <span>{largestContentfulPaint.title}</span>
                                </Label>
                                <div style={{ margin: 'auto 0', lineHeight: '1.8', fontSize: 15, fontWeight: 400 }}>
                                    <Color value={largestContentfulPaint.score * 100}><span>{largestContentfulPaint.displayValue}</span></Color>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div>
                    <div style={{ background: '#181818', cursor: 'pointer', boxShadow: '0 0 3px rgb(29, 30, 34)', padding: '11px 16px', borderRadius: 8, margin: 16, width: 450 }}>
                        <div style={{ display: 'flex', position: 'relative', height: 32, flexDirection: inverse ? 'row-reverse' : '' }}>
                            {/* <div style={{ margin: 'auto 0', height: 19, paddingTop: 1 }}>
                                <svg viewBox="0 0 24 24" width="19" height="19" fill="#c5c8d4">
                                    <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                                </svg>
                            </div> */}
                            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', flexDirection: inverse ? 'row-reverse' : '' }}>
                                <Label style={{ margin: 'auto 8px', fontWeight: 600, color: '#c5c8d4', fontSize: 16 }}>
                                    <span>{interactive.title}</span>
                                </Label>
                                <div style={{ margin: 'auto 0', lineHeight: '1.8', fontSize: 15, fontWeight: 400 }}>
                                    <Color value={interactive.score * 100}><span>{interactive.displayValue}</span></Color>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div>
                    <div style={{ background: '#181818', cursor: 'pointer', boxShadow: '0 0 3px rgb(29, 30, 34)', padding: '11px 16px', borderRadius: 8, margin: 16, width: 450 }}>
                        <div style={{ display: 'flex', position: 'relative', height: 32, flexDirection: inverse ? 'row-reverse' : '' }}>
                            {/* <div style={{ margin: 'auto 0', height: 19, paddingTop: 1 }}>
                                <svg viewBox="0 0 24 24" width="19" height="19" fill="#c5c8d4">
                                    <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                                </svg>
                            </div> */}
                            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', flexDirection: inverse ? 'row-reverse' : '' }}>
                                <Label style={{ margin: 'auto 8px', fontWeight: 600, color: '#c5c8d4', fontSize: 16 }}>
                                    <span>{totalBlockingTime.title}</span>
                                </Label>
                                <div style={{ margin: 'auto 0', lineHeight: '1.8', fontSize: 15, fontWeight: 400 }}>
                                    <Color value={totalBlockingTime.score * 100}><span>{totalBlockingTime.displayValue}</span></Color>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <div style={{ background: '#181818', cursor: 'pointer', boxShadow: '0 0 3px rgb(29, 30, 34)', padding: '11px 16px', borderRadius: 8, margin: 16, width: 450 }}>
                        <div style={{ display: 'flex', position: 'relative', height: 32, flexDirection: inverse ? 'row-reverse' : '' }}>
                            {/* <div style={{ margin: 'auto 0', height: 19, paddingTop: 1 }}>
                                <svg viewBox="0 0 24 24" width="19" height="19" fill="#c5c8d4">
                                    <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                                </svg>
                            </div> */}
                            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', flexDirection: inverse ? 'row-reverse' : '' }}>
                                <Label style={{ margin: 'auto 8px', fontWeight: 600, color: '#c5c8d4', fontSize: 16 }}>
                                    <span>{cumulativeLayoutShift.title}</span>
                                </Label>
                                <div style={{ margin: 'auto 0', lineHeight: '1.8', fontSize: 15, fontWeight: 400 }}>
                                    <Color value={cumulativeLayoutShift.score * 100}><span>{cumulativeLayoutShift.displayValue}</span></Color>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}