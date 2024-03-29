import React from "react"
import { Container, Input, Button } from "@styles"
import styled, { css } from "styled-components"
import { Fade } from "@animations"

const Footer = () => (
  <Container wrapper wrapperSmOnMd section id="contact">
    <Flex>
      <FadeContainer>
        <Form>
          <InputContainer half>
            <Input id="name" type="text" />
            <Label htmlFor="name">Name</Label>
          </InputContainer>

          <InputContainer half>
            <Input id="email" type="text" />
            <Label htmlFor="email">Email</Label>
          </InputContainer>

          <InputContainer textarea>
            <Textarea id="message" type="text" as="textarea" />
            <Label htmlFor="message">Message</Label>
          </InputContainer>

          <ButtonContainer>
            <Fade y={10}>
              <Button primary>Submit</Button>
            </Fade>
          </ButtonContainer>
        </Form>
      </FadeContainer>

      <TextContainer>
        <Fade>
          <Title>Let's Connect</Title>
        </Fade>
        <Fade delay={0.3}>
          <Body>
            Although I'm not currently looking for work, please feel free to
            reach out if you have any questions or want to say hi, and I will
            try to get back to you as soon as possible.
          </Body>
        </Fade>
      </TextContainer>
    </Flex>
  </Container>
)

export default Footer

const Flex = styled.div`
  display: flex;

  @media screen and (max-width: 61.25em) {
    flex-direction: column-reverse;
  }
`

const FadeContainer = styled(Fade)`
  flex: 1;
`

const Form = styled.form`
  background-color: "#333";
  padding-right: var(--s-9);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${Input} {
    border-color: ${props => (props.theme.isDark ? "#546069" : "#212527")};
    position: relative;
    z-index: 3;
  }
  @media screen and (max-width: 61.25em) {
    padding-right: 0;
  }
`

const InputContainer = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: var(--s-6);

  ${props =>
    props.half &&
    css`
      flex-basis: 48%;
      width: 48%;
    `}
`

const Textarea = styled(Input)`
  height: 12rem;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`

const Label = styled.label`
  font-family: var(--font-header);
  font-weight: bold;
  font-size: var(--s-6);
  line-height: 1;
  background-color: var(--color-contrast);
  padding: 6px var(--s-3) 4px;
  transition: all 0.2s;
  color: white;
  position: relative;
  background-color: ${props =>
    props.theme.isDark ? "var(--color-gray-medium)" : "#212527"};

  ${Input}:focus + & {
    color: var(--color-cta);
    box-shadow: 3px 3px var(--color-cta);
  }
`

const TextContainer = styled.div`
  flex: 1;
  line-height: 1.8;
  @media screen and (max-width: 61.25em) {
    margin-bottom: var(--s-11);
  }
`

const Title = styled.h2`
  margin-bottom: var(--s-6);
  font-size: var(--s-10);

  @media screen and (max-width: 61.25em) {
    font-size: var(--s-9);
  }
`
const Body = styled.p`
  max-width: 56rem;
`
