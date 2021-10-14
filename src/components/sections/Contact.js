import React from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { AiTwotoneMail, AiTwotonePhone } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';

import { SiteBorderStyles } from '../../styles/SiteBorderStyles';
import ContactForm from '../ContactForm';

export default function Contact() {
  return (
    <ContactStyles>
      <SiteBorderStyles className="wrapper">
        {/* section-header */}
        <div className="text-left md:text-center py-4 md:pt-12">
          <h2 className="text-2xl lg:text-4xl">
            <span className="highlight-red" style={{ whiteSpace: 'nowrap' }}>
              <Trans>Connect</Trans>
            </span>
            <Trans> With Us</Trans>
          </h2>
          <p className="hidden md:block text-xl lg:text-2xl my-4">
            <Trans>Have a Project? Interested in Joining Force?</Trans>
          </p>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Contact Info */}
          <div className="flex md:pb-12">
            <div className="flex-1 flex md:flex-col items-center md:text-center p-2 md:p-4 text-md md:text-xl">
              <FiMapPin className="text-3xl m-2 md:mb-4" />
              <Trans>2-227 St-Paul, Quebec, QC, Canada G1K 3W3</Trans>
            </div>
            <a href="mailto:info@coderbunker.ca" className="hidden md:flex flex-1 flex-col items-center p-4 text-md md:text-xl">
              <AiTwotoneMail className="text-3xl md:mb-4" />
              ca@coderbunker.com
            </a>
            <div className="hidden md:flex flex-1 flex-col items-center p-4 text-lg md:text-xl">
              <AiTwotonePhone className="text-3xl md:mb-4" />
              +1 438-530-7111
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </SiteBorderStyles>
      <div
        className="absolute"
        style={{
          zIndex: '-1', width: '50vw', left: '0', bottom: '5vh',
        }}
      >
        <StaticImage
          placeholder="blurred"
          src="../../assets/images/map.png"
          width={1000}
          alt="Map outline of Canada"
        />
      </div>
    </ContactStyles>
  );
}

const ContactStyles = styled.section`
  height: calc(100vh - 56px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p, svg {
    color: var(--darkgrey);
  }

  @media (min-width: 640px) {
    min-height: unset;
  }
`;
