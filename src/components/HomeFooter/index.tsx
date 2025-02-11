import React, { FC } from "react"
import packageJson from "../../../package.json"
import { Container } from "../Container"
import * as SC from "./styles"

export const HomeFooter: FC = () => {
  return (
    <SC.HomeFooterWrapper>
      <Container>
        <p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> - Source on{" "}
          <a href={packageJson.repository.url}>GitHub</a>
        </p>
      </Container>
    </SC.HomeFooterWrapper>
  )
}
