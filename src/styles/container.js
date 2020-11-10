import styled, { css } from "styled-components"

const Container = styled.div`

  ${props => props.bgAccent && css`
    background-color: var(--color-bg-secondary);
  `}

  ${props => props.wrapper && css`
    width: 100%;
    max-width: 124rem;
    padding-left: 1.4rem;
    padding-right: 1.4rem;
    margin-left: auto;
    margin-right: auto;
  `}

  ${props => props.wrapperSm && css`
    max-width: 60rem;
  `}

  ${props => props.section && css`
    padding-top: 14rem;
    padding-bottom: 14rem;
  `}

  ${props => props.fcc && css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}

  ${props => props.sectionTop && css`
    padding-top: 14rem;
  `}

  ${props => props.sectionBottom && css`
    padding-bottom: 14rem;
  `}

  @media screen and (max-width: 900px) {
    ${props => props.wrapperSmOnTab && css`
      max-width: 60rem;
    `}

    ${props => props.section && css`
      padding-top: 10rem;
      padding-bottom: 10rem;
    `}

    ${props => props.sectionTop && css`
      padding-top: 10rem;
    `}

    ${props => props.sectionBottom && css`
      padding-bottom: 10rem;
    `}
  } // end of 900px

  @media screen and (max-width: 600px) {

    ${props => props.section && css`
      padding-top: 8rem;
      padding-bottom: 8rem;
    `}

    ${props => props.sectionTop && css`
      padding-top: 8rem;
    `}

    ${props => props.sectionBottom && css`
      padding-bottom: 8rem;
    `}
  } // end of 600px

`

export default Container