import * as React from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import LogoGarden from '../LogoGarden';
import { SiteBorderStyles } from '../../styles/SiteBorderStyles';
import StackedAvatar from '../StackedAvatar';

export default function Hero({ sectionRefs, setTeamIndex, pausedRef }) {
  return (
    <HeroStyles>
      <SiteBorderStyles>
        <div className="hero">
          {/* Hero Content */}
          <div>
            <h1 className="text-2xl md:text-4xl">
              <span>
                <Trans>Introducing Coderbunker in the </Trans>
              </span>
              <span className="inline highlight-red uppercase">
                <Trans>North</Trans>
              </span>
            </h1>
            <p className="text-1xl md:text-2xl mt-2">
              <Trans>We empower freelancer community to excel in long term projects.</Trans>
            </p>
            <StackedAvatar
              sectionRefs={sectionRefs}
              setTeamIndex={setTeamIndex}
              pausedRef={pausedRef}
            />

          </div>

          {/* Hero Image */}
          <div className="hidden md:block p-16">
            <StaticImage
              placeholder="blurred"
              src="../../assets/images/coders.png"
              alt="Coderbunker Coders"
            />
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
  padding-bottom: 0;

  position: relative;
  .hero {
    height: calc(80vh - 100px);
    display: grid;
    align-items: center;
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
  @media (min-width: 768px) {
    .hero {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
