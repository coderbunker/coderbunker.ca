import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

import { SiteBorderStyles } from '../styles/SiteBorderStyles';
import { CallToAction } from './Button';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  return (
    <HeaderStyles>
      <SiteBorderStyles>
        <div className="header-content items-center">
          {/* social links */}
          <div className="hidden md:block flex flex-row">
            <a className="inline-block mr-5" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/coderbunker/">
              <FiLinkedin className="text-2xl" />
            </a>
            <a className="inline-block" target="_blank" rel="noreferrer" href="https://github.com/coderbunker">
              <FiGithub className="text-2xl" />
            </a>
          </div>

          {/* logo */}
          <Link to="/">
            <StaticImage
              placeholder="blurred"
              src="../assets/images/coderbunker_canada_logo.png"
              alt="Coderbunker Logo"
              width={50}
            />
          </Link>

          <ul className="flex items-center text-lg">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Red Retain Us Button */}
            <li>
              <CallToAction />
            </li>
          </ul>
        </div>
      </SiteBorderStyles>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header`
  color: var(--darkgrey);
  border-bottom: 1px solid var(--lightgrey);
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  background: rgb(255, 255, 255);
  z-index: 999;
  .header-content {
    display: grid;
    grid-template-columns: auto 1fr;

    ul {
      margin-left: auto;
    }
  }
  a:hover, button:hover {
    color: var(--black);
  }
  .switched-on {
    background-color: var(--peach);
    color: black;
    transform: skew(-16deg);
  }
  @media (min-width: 768px) {
    .header-content {
      grid-template-columns: 1fr auto 1fr;
    }
  }
`;
