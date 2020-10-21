import styled, { css } from "styled-components"

const Button = styled.button`
  padding: var(--s-3) var(--s-7) var(--s-1);
  font-family: 'Yantramanav', sans-serif;
  font-weight: bold;
  letter-spacing: .5px;
  text-transform: uppercase;
  color: #000;
  border: 2px solid #000;
  background-color: #fff;
  display: inline-block;
  cursor: pointer;
  transition: all .2s;
  min-width: 16rem;
  text-align: center;
  
  :hover {
    background-color: #efefef;
    color: #000;
    box-shadow: 4px 4px 0 #f199b9;
  }

  ${props => props.primary && css`
    color: #fff;
    border: 2px solid #000;
    background-color: #000;
    :hover {
      background-color: #000;
      color: #f199b9;
    }
  `}
`

export default Button