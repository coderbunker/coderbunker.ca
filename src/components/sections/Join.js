import * as React from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import { SiteBorderStyles } from '../../styles/SiteBorderStyles';
import BackgroundImage from '../BackgroundImage';

export default function Join() {
  return (
    <JoinStyles>
      <SiteBorderStyles className="wrapper">
        {/* section-header */}
        <div className="text-left md:text-center py-4 md:pt-16 lg:pt-24">
          <h2 className="text-2xl lg:text-4xl">
            <span className="highlight-red">
              <Trans>Join</Trans>
            </span>
            <Trans> Our Community</Trans>
          </h2>
          <p className="hidden md:block text-xl lg:text-2xl md:my-4">
            <Trans>We are 50+ International Digital Talents and growing!</Trans>
          </p>
        </div>
        {/* hashtags */}
        <div className="hash-tags" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="lg:text-xl md:my-4 md:pb-8 text-center">#SoftwareDevelopment #EmbeddedSystems #Blockchain #DigitalIdentity #PublicKeyInfrastructure #SystemAdministration #Cybersecurity #Encryption #Linux #FPGA #ARM #RISC-V #Ethereum #PGP #PostgreSQL #AWS #Azure #GoogleCloud #etc</p>
          <div style={{
            maxWidth: '70vw', width: '500px', margin: '0 auto', padding: '2rem',
          }}
          >
            <StaticImage
              placeholder="blurred"
              src="../../assets/images/coders.png"
              alt="Coderbunker Coders Coworking"
            />
          </div>
        </div>
      </SiteBorderStyles>
      <div className="bg-img-wrapper flex">
        <BackgroundImage style={{ width: '45vw' }} imgStyle={{ height: 'auto' }} />
        <BackgroundImage style={{ width: '30vw', transform: 'translate(-1vw, 10vw)' }} imgStyle={{ height: 'auto' }} />
        <BackgroundImage style={{ width: '10vw', transform: 'translate(5vw, 10vw)' }} imgStyle={{ height: 'auto' }} />
      </div>
    </JoinStyles>
  );
}

const JoinStyles = styled.section`
  position: relative;
  .bg-img-wrapper {
    position: absolute;
    bottom: 5vw;
    left: 20px;
    z-index: -1;
  }
  .card {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.5);
  }

  .icon-wrapper {
    background-color: var(--lightgrey);
    padding: 0.75rem;
    margin-right: 0.75rem;
    border-radius: 10px;
  }
  svg, p {
    color: var(--darkgrey);
  }
  ul {
    list-style-type: "→";
    padding-left: 2rem;
    li {
      padding-left: 0.5rem;
    }
  }
`;
