import React from "react"
import { Container, Input, Button } from "@styles"
import styled, { css } from "styled-components"

const Footer = () => (
  <Container wrapper>
    <Flex>
      <Form>
        <InputContainer half>
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" />
        </InputContainer>

        <InputContainer half>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="text" />
        </InputContainer>

        <InputContainer textarea>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" type="text" as="textarea" />
        </InputContainer>

        <Button primary>Submit</Button>
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
  padding: 5.6rem 0;
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
  flex-direction: column;
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

const Label = styled.label`
  font-family: "Yantramanav", sans-serif;
  font-weight: bold;
  font-size: var(--s-6);
  line-height: 1;
  background-color: var(--color-contrast);
  padding: 6px var(--s-3) 4px;
  color: ${props => (props.theme.isDark ? "var(--color-black)" : "white")};
`

const TextContainer = styled.form`
  flex: 1;
  line-height: 1.8;
`

const Title = styled.h2`
  font-size: var(--s-8);
  margin-bottom: var(--s-6);
`
const Body = styled.p``
