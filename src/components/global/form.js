import React from "react"
import { Container, Input, Button } from "@styles"
import styled, { css } from "styled-components"

const Footer = () => (
  <Container wrapper sectionSm>
    <Flex>
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
          <Button primary>Submit</Button>
        </ButtonContainer>
      </Form>

      <TextContainer>
        <Title>Ready to work together?</Title>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, totam
          mollitia? Enim, fuga libero hic iste voluptas molestiae nesciunt a
          nisi sunt, in magnam? Provident aperiam sit quod hic voluptas esse.
        </p>
      </TextContainer>
    </Flex>
  </Container>
)

export default Footer

const Flex = styled.div`
  display: flex;
`

const Form = styled.form`
  background-color: "#333";
  flex: 1;
  padding-right: var(--s-9);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  font-family: "Yantramanav", sans-serif;
  font-weight: bold;
  font-size: var(--s-6);
  line-height: 1;
  background-color: var(--color-contrast);
  padding: 6px var(--s-3) 4px;
  transition: color 0.2s;
  color: ${props => (props.theme.isDark ? "var(--color-black)" : "white")};

  ${Input}:focus + & {
    color: var(--color-cta);
  }
`

const TextContainer = styled.div`
  flex: 1;
  line-height: 1.8;
`

const Title = styled.h2`
  font-size: var(--s-8);
  margin-bottom: var(--s-6);
`
const Body = styled.p``
