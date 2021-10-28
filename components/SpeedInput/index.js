import styled from 'styled-components'

const Input = styled.input`
    width: 100%;
    padding: 12px 16px;
    border-width: 0;
    border-radius: 4px;
    outline: 0;
`

export default function SpeedInput({ styles={}, value, setValue, disabled=false }) {
    return <Input style={{ ...styles }} disabled={disabled} onChange={e => setValue(e.target.value)} value={value} type="text" placeholder="Insira uma URL do seu site aqui" />
}