import React from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';

import { SiteBorderStyles } from '../../styles/SiteBorderStyles';
import BackgroundImage from '../BackgroundImage';
import Carousel from '../Carousel';

export default function Team({ teamIndex, setTeamIndex, locale }) {
  return (
    <TeamStyles>
      <SiteBorderStyles className="wrapper">
        {/* section-header */}
        <div className="text-left md:text-center py-4 md:py-16 lg:py-24">
          <h2 className="text-2xl lg:text-4xl">
            <span className="highlight-red">
              <Trans>Consult</Trans>
            </span>
            <Trans> Your Tech Lead</Trans>
          </h2>
          <p className="hidden md:block text-xl lg:text-2xl my-4">
            <Trans>We strive to raise the bar of technical expertise.</Trans>
          </p>
        </div>
        {/* Carousel */}
        <Carousel teamIndex={teamIndex} setTeamIndex={setTeamIndex} locale={locale} />
      </SiteBorderStyles>
      <div className="bg-img-wrapper">
        <BackgroundImage style={{ width: '48vw' }} />
      </div>
    </TeamStyles>
  );
}

const TeamStyles = styled.section`
  position: relative;
  .bg-img-wrapper {
    position: absolute;
    bottom: 5vw;
    left: 50vw;
    z-index: -1;
  }
  p {
    color: var(--darkgrey);
  }
`;
