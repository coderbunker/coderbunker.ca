import * as React from "react"
import { Trans } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";

import LogoGarden from '../components/logo-garden';
import SiteBorderStyles from '../styles/SiteBorderStyles';
import StackedAvatar from "./stacked-avatar";

export default function Hero() {
  return (
    <HeroStyles>
      <SiteBorderStyles>
        <div className="hero flex flex-col md:flex-row items-center">
          {/* Hero Content */}
          <div className="flex-1 flex flex-col justify-center items-start">
            <h1 className="text-3xl md:text-4xl leading-relaxed md:leading-12 mb-3">
              <span>
                <Trans>Introducing Coderbunker Canada in the </Trans>
              </span>
              <span className="inline highlight-red uppercase">
                <Trans>North</Trans>
              </span>
            </h1>
            <p className="text-2xl">
              <Trans>We empower freelancer community to excel in long term projects.</Trans>
            </p>
            <StackedAvatar />
          </div>

          {/* Hero Image*/}
          <div className="flex-1 hidden md:block p-16">
            <StaticImage placeholder="blurred" src="../assets/images/coders.png"  alt="Coderbunker Coders"/>
          </div>
        </div>

      </SiteBorderStyles>
      {/* logo garden */}
      <LogoGarden />
      <div className="quarter-circle-bottom-left" />
    </HeroStyles>
  );
}

const HeroStyles = styled.section`
  position: relative;
  .hero {
    height: calc(80vh - 100px);
    p {
      color: var(--darkgrey);
    }
  }
  .quarter-circle-bottom-left{
    position: absolute;
    bottom: 0;
    left: 0;

    width: 70vw;
    height: 70vw;
    background: var(--peach);
    border-radius: 0 70vw 0 0;
    -moz-border-radius: 0 70vw 0 0;
    -webkit-border-radius: 0 70vw 0 0;
    z-index: -1;
  }
  .stats {
    background: var(--white);
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    div:first-child {
      border-right: 1px solid var(--lightgrey);
    }
    small {
      color: var(--darkgrey);
    }
  }
`;
