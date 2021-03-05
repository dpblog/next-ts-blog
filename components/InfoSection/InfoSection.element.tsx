import styled from 'styled-components'

interface InfoProps {
    readonly lightBg: boolean;
  }

export const InfoSec = styled.div<InfoProps>`
color:#fff;
padding:160px 0;
background: ${({lightBg}) => (lightBg ? '#fff': '#101522')}
`