import styled, { css } from "styled-components"

const Button = styled.button`
  padding: var(--s-3) var(--s-7) var(--s-1);
  font-family: "Yantramanav", sans-serif;
  font-weight: bold;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--color-black);
  border: 2px solid;
  border-color: ${props =>
    props.theme.isDark ? "white" : "var(--color-black)"};
  background-color: #fff;
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 16rem;
  text-align: center;

  :hover {
    background-color: #efefef;
    color: var(--color-black);
    box-shadow: 4px 4px 0 var(--color-cta);
    border-color: ${props =>
      props.theme.isDark ? "var(--color-cta)" : "var(--color-black)"};
  }

  ${props =>
    props.primary &&
    css`
      border: 2px solid var(--color-btn-primary);
      background-color: var(--color-btn-primary);
      color: ${props => (props.theme.isDark ? "var(--color-black)" : "#fff")};

      :hover {
        background-color: var(--color-black);
        color: var(--color-cta);
      }
    `}
`

export default Button
