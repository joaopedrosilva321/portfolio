import styled from "styled-components"

const Iphone = styled.div`

// overflow: hidden;
height: ${props => props.heightS};

.iphonex {
  height: inherit;
  width: inherit;
  position: relative;
  margin 0 auto;
}

.iphonex__case {
  position: absolute;
  background: transparent;
  width: inherit;
  height: inherit;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 35px;
  // border: 11px solid ${props => props.theme.colorsDark.fonts.Quaternary};
  background: linear-gradient(#333, #111 ${props => props.heightS || '330px'}) padding-box, linear-gradient(to bottom, #181818 , #111 ${props => props.heightS}) border-box;
  border: 11px solid transparent;
}

.iphonex__top {
  position: absolute;
  background: transparent;
  height: 15px;
  width: 208px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.iphonex__battery {
  position: absolute;
  right: 8px;
  font-size: 10px;
  top: 3px;
}

.iphonex__notch {
  background: ${props => props.theme.colorsDark.fonts.Quaternary};
  height: 15px;
  width: 115px;
  position: absolute;
  left: 48px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.iphonex__speaker {
  background: rgb(51, 51, 51);
  width: 30px;
  height: 6px;
  border-radius: 8px;
  position: absolute;
  left: 43px;
}

.iphonex__camera {
  background: rgb(51, 51, 51);
  width: 7px;
  height: 7px;
  border-radius: 8px;
  position: absolute;
  left: 80px;
}

.iphonex__screen {
  width: 100%;
  // height: 320px;
  background: transparent;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  overflow: hidden;
  border-radius: 20px;
  // top: 25px;
  position: absolute;
  cursor: pointer;
  user-select: none;
}

.iphonex__power {
  width: 3px;
  height: 19px;
  background: #292929;
  position: absolute;
  left: -1px;
  top: 62px;
}
.iphonex__volume {
  width: 3px;
  height: 32px;
  background: #292929;
  position: absolute;
  left: -1px;
  top: 98px;
}
.iphonex__volume--down {
  top: 142px;
}
.shadowIphone {
  background: linear-gradient(to bottom, transparent, #111 ${props => props.shadow || '350%'}) border-box; 
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
}
`

const ShadowIphone = styled.div`

`

export default function IphoneX({ Image, children, styles={} }) {
  return (
    <Iphone widthS={styles.width} heightS={styles.height} shadow={styles.shadow} style={styles}>
      <div className="iphonex">
        <div className="iphonex__case">
          <div className="iphonex__notch">
            <div className="iphonex__speaker"></div>
            <div className="iphonex__camera"></div>
          </div>
          <div className="iphonex__screen">
            <div className="shadowIphone" /> 
            {children}

          </div>
        </div>
        <div className="iphonex__power"></div>
        <div className="iphonex__volume iphonex__volume--up"></div>
        <div className="iphonex__volume iphonex__volume--down"></div>
      </div>
    </Iphone>
  )
}
