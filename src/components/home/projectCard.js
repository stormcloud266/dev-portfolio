import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Project = ({ title, tags }) => (
  <div>
    <h3>{title}</h3>
    {
      tags.map(tag => <p>{tag}</p>)
    }
  </div>
)

export default Project