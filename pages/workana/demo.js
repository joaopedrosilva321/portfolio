import styled, { keyframes } from 'styled-components';

import Nav from '../../components/Nav';

import logo from '../../assets/workana/logo.png';

const NavDemo = styled.div`
    width: 100%;
    height: 70px;
    // display: flex;
    // align-items: center;
    border-bottom: 1px solid #181818;
    // padding: 0 16px;
`

const NavigationIndicator = styled.div`
    border: 1px solid #181818;
    &::before{
        content: '';
        background: #50FA7B;
        border-radius: 8px;
        width: 48px;
        height: 3px;
        position: absolute;
        margin-top: -2px;
    }
`

import bank from '../../assets/workana/bank.svg'
import hero from '../../assets/workana/hero.svg'
import premium from '../../assets/workana/premium.svg'
import top100 from '../../assets/workana/top100.svg'
import star from '../../assets/workana/star.svg'


export default function Projects() {


    return (
        <>
            <Nav />
            <NavDemo>
                <div style={{ minWidth: 1058, margin: '0 auto', display: 'flex', alignItems: 'center' }}>
                    <div>
                        <img style={{ height: 30, width: 130, marginTop: 16, cursor: 'pointer', userSelect: 'none' }} src={logo.src} alt="" />
                    </div>
                    <div style={{ color: '#FFFFFF', fontSize: 15 }}>
                        <ul style={{ margin: 0 }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: '0 24px' }}>
                                    <li>
                                        <a href="#">Freelancers</a>
                                    </li>
                                </div>
                                <div style={{ margin: '0 24px' }}>
                                    <li>
                                        <a href="#">Trabalho Freelancer</a>
                                    </li>
                                </div>
                                <div style={{ margin: '0 24px' }}>
                                    <li>
                                        <a href="#">Como funciona</a>
                                    </li>
                                </div>
                                <div style={{ margin: '0 24px' }}>
                                    <li>
                                        <a href="#">Empresas</a>
                                    </li>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </NavDemo>
            <div style={{ maxWidth: 1058, margin: '0 auto', display: 'flex', alignItems: 'center' }}>
                <div><span>Workana  >  Freelancers  >  Freelancers de Brasil  >  profissional Escrita de artigos  >  Lucas G. C. </span></div>
            </div>
            <div style={{ display: 'flex', maxWidth: 1058, margin: '0 auto', flexWrap: 'wrap' }}>
                <div style={{ width: 750 }}>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <div>
                                <div style={{ width: 192, height: 192, background: '#181818', border: '4px solid #282A36', borderRadius: '50%' }}></div>
                            </div>
                            <div>
                                <div style={{ width: 135, height: 32, fontWeight: 500, fontSize: 13, background: '#50FA7B', borderRadius: 16, display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '16px auto' }}>
                                    <span>Contratar</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ margin: "0 32px" }}>
                            <div style={{ border: "1px solid #50FA7B", borderRadius: 8, padding: '2px 8px', fontSize: 13, color: "#50FA7B", fontWeight: 100, width: 64, textAlign: 'center' }}>
                                <span>Hero</span>
                            </div>
                            <div>
                                <div style={{ fontSize: 32, fontWeight: 600, color: '#F8F8F2' }}>
                                    <span>Lucas G. C.</span>
                                </div>
                                <div style={{ color: '#F8F8F2' }}>
                                    <span>Compromisso e originalidade</span>
                                </div>
                            </div>
                            <div style={{ color: '#888888', fontSize: 13, width: 350, margin: '8px 0' }}>
                                <span>Com mais de 5 anos de mercado, o trabalho de 1 freelancer se tornou uma empresa com mais de 30 pessoas.</span>
                            </div>
                            <div style={{ display: 'flex', padding: '8px 0' }}>
                                <div style={{ margin: '0 5px 0 0' }}><img style={{ width: 28, height: 28 }} src={bank.src} alt="" /></div>
                                <div style={{ margin: '0 5px 0 0' }}><img style={{ width: 28, height: 28 }} src={hero.src} alt="" /></div>
                                <div style={{ margin: '0 5px 0 0' }}><img style={{ width: 28, height: 28 }} src={premium.src} alt="" /></div>
                                <div style={{ margin: '0 5px 0 0' }}><img style={{ width: 28, height: 28 }} src={top100.src} alt="" /></div>
                            </div>
                            <div style={{ display: 'flex', margin: '8px 0 0 0' }}>
                                <div style={{ color: '#F8F8F2', fontSize: "11px", padding: '8px 16px', background: '#181818', borderRadius: 16, fontWeight: 400, margin: '0 16px 0 0' }}>
                                    <span>Escrita de artigos (1 ano)</span>
                                </div>
                                <div style={{ color: '#F8F8F2', fontSize: "11px", padding: '8px 16px', background: '#181818', borderRadius: 16, fontWeight: 400, margin: '0 16px 0 0' }}>
                                    <span>Edição de textos (1 ano)</span>
                                </div>
                                <div style={{ color: '#F8F8F2', fontSize: "11px", padding: '8px 16px', background: '#181818', borderRadius: 16, fontWeight: 400, }}>
                                    <span>Seo (1 ano)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: 24 }}>
                        <div style={{ display: 'flex', margin: '0 0 16px 16px' }}>
                            <ul style={{ margin: 0, padding: 0 }}>
                                <div style={{ display: "flex" }}>
                                    <div style={{ margin: '0 32px 0 0', color: '#F8F8F2', fontWeight: 600 }}>
                                        <li>All</li>
                                    </div>
                                    <div style={{ margin: '0 32px 0 0', color: '#888888' }}>
                                        <li>Portfólio</li>
                                    </div>
                                    <div style={{ margin: '0 32px 0 0', color: '#888888' }}>
                                        <li>About</li>
                                    </div>
                                    <div style={{ margin: '0 24px 0 0', color: '#888888' }}>
                                        <li>Posts</li>
                                    </div>
                                </div>
                            </ul>
                            <div>
                                <div style={{ display: 'flex', height: 18 }}>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ margin: '0 2px' }}>
                                            <svg viewBox="0 0 24 24" width="18" height="18" fill="#E1E04B">
                                                <path d="M1.327,12.4,4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6a3.227,3.227,0,0,0-1.9-5.832H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832Z" />
                                            </svg>
                                        </div>
                                        <div style={{ margin: '0 2px' }}>
                                            <svg viewBox="0 0 24 24" width="18" height="18" fill="#E1E04B">
                                                <path d="M1.327,12.4,4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6a3.227,3.227,0,0,0-1.9-5.832H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832Z" />
                                            </svg>
                                        </div>
                                        <div style={{ margin: '0 2px' }}>
                                            <svg viewBox="0 0 24 24" width="18" height="18" fill="#E1E04B">
                                                <path d="M1.327,12.4,4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6a3.227,3.227,0,0,0-1.9-5.832H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832Z" />
                                            </svg>
                                        </div>
                                        <div style={{ margin: '0 2px' }}>
                                            <svg viewBox="0 0 24 24" width="18" height="18" fill="#E1E04B">
                                                <path d="M1.327,12.4,4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6a3.227,3.227,0,0,0-1.9-5.832H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832Z" />
                                            </svg>
                                        </div>
                                        <div style={{ margin: '0 2px' }}>
                                            <svg viewBox="0 0 24 24" width="18" height="18" fill="#E1E04B">
                                                <path d="M1.327,12.4,4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6a3.227,3.227,0,0,0-1.9-5.832H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div style={{ fontSize: 14, color: '#888888', margin: '0 16px' }}>
                                        <span>4.76 / 5</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ margin: '0 0 0 8px' }}>
                                <svg viewBox="0 2 25 18" width="36" height="18" fill="#888888">
                                    <circle cx="2" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="22" cy="12" r="2" />
                                </svg>
                            </div>
                        </div>
                        <NavigationIndicator />
                    </div>
                    {/* Postagens */}
                    <div style={{ display: 'flex' }}>
                        <div>
                            <div style={{ margin: "24px 12px", width: 367, height: 535, background: "#181818", borderRadius: 8 }} />
                            <div style={{ margin: "24px 12px", width: 367, height: 382, background: "#181818", borderRadius: 8 }} />
                        </div>
                        <div>
                            <div style={{ margin: "24px 12px", width: 367, height: 382, background: "#181818", borderRadius: 8 }} />
                            <div style={{ margin: "24px 12px", width: 367, height: 535, background: "#181818", borderRadius: 8 }} />
                        </div>
                        <div></div>
                    </div>
                </div>

                <div style={{ width: 300 }}>
                    <div>
                        <div style={{ color: '#F8F8F2' }}>
                            <span>Habilidades</span>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <div style={{ margin: '8px 8px 0px 0', color: '#F8F8F2', fontSize: "11px", padding: '8px 16px', background: '#181818', borderRadius: 16, fontWeight: 400 }}>
                                <span>Edição de texto</span>
                            </div>
                            <div style={{ margin: '8px 8px 0px 0', color: '#F8F8F2', fontSize: "11px", padding: '8px 16px', background: '#181818', borderRadius: 16, fontWeight: 400 }}>
                                <span>Diagramação</span>
                            </div>
                            <div style={{ margin: '8px 8px 0px 0', color: '#F8F8F2', fontSize: "11px", padding: '8px 16px', background: '#181818', borderRadius: 16, fontWeight: 400 }}>
                                <span>WordPress</span>
                            </div>
                            <div style={{ margin: '8px 8px 0px 0', color: '#F8F8F2', fontSize: "11px", padding: '8px 16px', background: '#181818', borderRadius: 16, fontWeight: 400 }}>
                                <span>Escrita online</span>
                            </div>
                            <div style={{ margin: '8px 8px 0px 0', color: '#F8F8F2', fontSize: "11px", padding: '8px 16px', background: '#181818', borderRadius: 16, fontWeight: 400 }}>
                                <span>SEO</span>
                            </div>
                            <div style={{ margin: '8px 8px 0px 0', color: '#F8F8F2', fontSize: "11px", padding: '8px 16px', background: '#181818', borderRadius: 16, fontWeight: 400 }}>
                                <span>Adobe Photoshop</span>
                            </div>
                            <div style={{ margin: '8px 8px 0px 0', color: '#F8F8F2', fontSize: "11px", padding: '8px 16px', background: '#181818', borderRadius: 16, fontWeight: 400 }}>
                                <span>Adobe After Effects</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ background: "#181818", borderRadius: 8, color: '#F8F8F2', padding: 16 }}>
                        <div>
                            <div>
                                <span>Atividade</span>
                            </div>
                            <div style={{ fontSize: 13, margin: '8px 0 16px', fontWeight: 400}}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 0 4px' }}>
                                    <div>
                                        <span>Projetos realizados</span>
                                    </div>
                                    <div>
                                        <span>3069</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 0 4px' }}>
                                    <div>
                                        <span>Projetos em execução</span>
                                    </div>
                                    <div>
                                        <span>36</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 0 4px' }}>
                                    <div>
                                        <span>Horas trabalhadas</span>
                                    </div>
                                    <div>
                                        <span>61</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <span>Informação</span>
                            </div>
                            <div style={{ fontSize: 13, margin: '8px 0 16px', fontWeight: 400}}>

                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 0 4px' }}>
                                    <div>
                                        <span>Classificações dos clientes</span>
                                    </div>
                                    <div>
                                        <span>3131</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 0 4px' }}>
                                    <div>
                                        <span>Violações</span>
                                    </div>
                                    <div>
                                        <span>0</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 0 4px' }}>
                                    <div>
                                        <span>Certificações</span>
                                    </div>
                                    <div>
                                        <span>3</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 0 4px' }}>
                                    <div>
                                        <span>Último login</span>
                                    </div>
                                    <div>
                                        <span>Ontem</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 0 4px' }}>
                                    <div>
                                        <span>Ingressou</span>
                                    </div>
                                    <div>
                                        <span>há 6 anos</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ width: 304, height: 382, background: "#181818", borderRadius: 8 }} />
                    <div style={{ width: 304, height: 382, background: "#181818", borderRadius: 8 }} />

                </div>
            </div>
        </>
    )
}