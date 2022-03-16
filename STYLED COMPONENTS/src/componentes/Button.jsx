import style from 'styled-components'

export const Button = style.button`

font-size: 16px;
background: ${props=>props.background};
color: ${props=>props.color};
padding: 12px 18px;
border-radius: 5px;
border: ${props=>props.border};

`