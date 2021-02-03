import styled, { css } from "styled-components"

const Button = styled.button`
  padding: var(--s-5) var(--s-7) var(--s-4);
  font-family: var(--font-header);
  font-weight: bold;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--color-black);
  border: 2px solid;
  border-color: ${props =>
    props.theme.isDark ? "white" : "var(--color-black)"};
  background-color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 16rem;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

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
