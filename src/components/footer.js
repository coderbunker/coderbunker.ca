import * as React from "react"
import styled from 'styled-components';
import SiteBorderStyles from '../styles/SiteBorderStyles';
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Trans } from "react-i18next";

const FooterStyle = styled.footer`
  padding: 100px;
  background: var(--black);
  padding: 0.5rem 0;
  color: var(--lightgrey);
`;

export default function Footer() {
  return (
    <FooterStyle>
      <SiteBorderStyles>
        {/* social links*/}
        <div className="flex my-1 md:my-2 items-center justify-between md:justify-center">
          <p className="" style={{ color: `var(--lightgrey)` }}>
            © {new Date().getFullYear()} Coderbunker, inc.
          </p>
          <p className="hidden md:inline-block" style={{ color: `var(--lightgrey)` }}>
            <span>&nbsp;|&nbsp;</span>
            <a target="_blank" rel="noreferrer" href="https://github.com/coderbunker/coderbunker.ca">
              <Trans>Built with Gatsby</Trans>
            </a>
          </p>
          <div>
            <a className="inline-block md:hidden p-2 ml-6" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/coderbunker/">
              <FiLinkedin className="text-xl" style={{ color: `var(--lightgrey)` }}/>
            </a>
            <a className="inline-block md:hidden p-2" target="_blank" rel="noreferrer" href="https://github.com/coderbunker">
              <FiGithub className="text-xl" style={{ color: `var(--lightgrey)` }}/>
            </a>
          </div>
        </div>
      </SiteBorderStyles>
    </FooterStyle>
  )
}
