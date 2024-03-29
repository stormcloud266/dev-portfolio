import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Fade } from "@animations"
import { Container } from "@styles"
import { ArrowCurve } from "@images/icons"

const listVariants = {
  hidden: { opacity: 0.01 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0.01,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.185, -0.01, 0, 1],
    },
  },
}

const Process = ({ body, list }) => {
  return (
    <Container wrapper wrapperSmOnMd section>
      <Fade>
        <Title>The Process</Title>
      </Fade>

      <Content>
        <TextContainer>{renderRichText(body)}</TextContainer>

        <ListContainer>
          <List
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {list.map(item => (
              <ListItem key={item} variants={itemVariants}>
                <ArrowCurve />
                {item}
              </ListItem>
            ))}
          </List>
        </ListContainer>
      </Content>
    </Container>
  )
}

export default Process

const Title = styled.h2`
  margin-bottom: var(--s-7);

  @media screen and (max-width: 61.25em) {
    font-size: var(--s-10);
    margin-top: -6px;
  }
`

const Content = styled.div`
  display: flex;

  @media screen and (max-width: 61.25em) {
    flex-direction: column;
  }
`
const TextContainer = styled(Fade)`
  flex: 1;

  p:not(:last-of-type),
  ul li:not(:last-child) {
    margin-bottom: var(--s-7);
  }

  a {
    text-decoration: underline wavy var(--color-cta);
    text-underline-offset: 3px;
    color: var(--color-text-primary);
    &:hover {
      color: var(--color-cta);
    }
  }

  li {
    list-style: disc;
    margin-left: var(--s-7);
  }

  b {
    font-family: var(--font-header);
    font-weight: bold;
  }
`
const ListContainer = styled.div`
  flex: 1;
  padding-left: var(--s-7);
  display: flex;
  justify-content: center;

  @media screen and (max-width: 61.25em) {
    padding-left: 0;
    margin-top: var(--s-10);
    justify-content: flex-start;
  }
`

const List = styled(motion.ul)`
  li:not(:last-of-type) {
    margin-bottom: var(--s-8);
  }

  svg {
    color: var(--color-cta);
    margin-right: var(--s-1);
    flex-shrink: 0;
  }
`

const ListItem = styled(motion.li)`
  font-family: var(--font-header);
  font-weight: 700;
  display: flex;
  color: var(--color-text-primary);
`
