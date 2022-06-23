import styled from "styled-components"

const Input = styled.input`
  background-color: var(--color-bg);
  border: 2px solid;
  border-color: var(--color-contrast);
  color: var(--color-text);
  transition: all 0.2s;
  padding: var(--s-0) var(--s-3);
  resize: none;
  width: 100%;
  border-color: ${props =>
    props.theme.isDark ? "#8e9da9" : "var(--color-black)"};
  :focus {
    box-shadow: 3px 3px 0 var(--color-cta);
    border-radius: 0;
    outline: 0;
  }
`

export default Input
