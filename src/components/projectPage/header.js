import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Button } from "@styles"
import Tags from "@components/global/tags"
import { LinkIcon, Github } from "@images/icons"

const Header = ({ site_url, github_link, tags, intro, image, title }) => {
  return (
    <StyledHeader wrapper>
      <InfoContainer>
        <LinksContainer>
          {site_url && (
            <Button
              primary
              as="a"
              href={site_url}
              target="_blank"
              rel="noreferrer"
            >
              <LinkIcon /> Visit Live Site
            </Button>
          )}

          {github_link && (
            <Button as="a" href={github_link} target="_blank" rel="noreferrer">
              <Github /> View on Github
            </Button>
          )}
        </LinksContainer>

        <Tags tags={tags} />
        <Excerpt>{intro}</Excerpt>
      </InfoContainer>
      <Image
        image={getImage(image)}
        imgStyle={{
          objectPosition: "top center",
        }}
        alt={`Home page for ${title}`}
      />
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 68.75em) {
    margin-bottom: 0;
    flex-direction: column-reverse;
    padding-top: var(--s-11);
    padding-bottom: var(--s-11);
    align-items: center;
  }
`

const Image = styled(GatsbyImage)`
  border-radius: 6px;
  width: 100%;
  max-width: 600px;
  height: 360px;
  transform: translateY(-40%);
  border: 1px solid var(--color-gray-medium);
  box-shadow: 6px 6px 0 -2px var(--color-gray-medium);

  @media screen and (max-width: 68.75em) {
    transform: translateY(0);
  }

  @media screen and (max-width: 36.25em) {
    height: 260px;
  }
`

const LinksContainer = styled.div`
  display: flex;
  margin: var(--s-8) 0 var(--s-7);

  ${Button} {
    padding: var(--s-4) var(--s-7);
    text-transform: unset;
    :first-child {
      margin-right: var(--s-7);
    }
  }

  svg {
    margin-right: var(--s-1);
  }

  @media screen and (max-width: 36.25em) {
    flex-direction: column;
    max-width: 22rem;

    ${Button}:first-child {
      margin-right: 0;
      margin-bottom: var(--s-4);
    }
  }
`
const InfoContainer = styled.div`
  padding-right: var(--s-8);
  @media screen and (max-width: 68.75em) {
    padding: 0;
  }
`
const Excerpt = styled.p`
  max-width: 56rem;
  padding-top: var(--s-3);
`
