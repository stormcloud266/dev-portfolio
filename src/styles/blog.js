import styled from "styled-components"

const Blog = styled.section`
  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 3.6rem;
    margin-bottom: 1.6rem;
  }

  h1 {
    line-height: 1.3;
  }

  h5,
  h6 {
    color: var(--color-text-body);
  }

  p,
  img,
  ul,
  ol,
  blockquote {
    margin-bottom: 2.4rem;
  }

  img {
    display: block;
    width: 100%;
  }

  ul,
  ol {
    margin-left: 2rem;
  }
  li:not(:last-child) {
    margin-bottom: 2.4rem;
  }

  ul li {
    list-style: disc;
  }
  ol li {
    list-style: decimal;
  }

  :global(.gatsby-image-wrapper) {
    margin-bottom: 3.6rem;
    margin-top: 3.6rem;
  }
`
export default Blog
