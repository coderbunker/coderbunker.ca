import * as React from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';
import { FaSignature, FaRocket, FaCubes } from 'react-icons/fa';
import { SiteBorderStyles } from '../../styles/SiteBorderStyles';

export default function Steps() {
  return (
    <StepsStyles>
      <SiteBorderStyles className="wrapper">
        {/* section-header */}
        <div className="text-left md:text-center py-4 md:py-16 lg:py-24">
          <h2 className="text-2xl lg:text-4xl">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Trans>Let's Get To </Trans>
            <span className="highlight-red">
              <Trans>Work</Trans>
            </span>
          </h2>
          <p className="hidden md:block text-xl lg:text-2xl my-4">
            <Trans>We keep it simple.</Trans>
          </p>
        </div>
        {/* cards */}
        <div className="cards flex flex-col md:flex-row">
          {/* card */}
          <div className="card flex flex-row sm:flex-col items-center text-left sm:text-center md:flex-1 md:my-2 p-2 md:p-8" data-aos="fade-up">
            <div className="icon-wrapper text-xl lg:text-2xl mr-4 sm:m-4">
              <FaSignature />
            </div>
            <div>
              <h3 className="lg:text-2xl sm:pb-2">
                <Trans>Retain Us</Trans>
              </h3>
              <p className="lg:text-xl">
                <Trans>Sign the retainer agreement, and deposit your first monthly budget.</Trans>
              </p>
            </div>
          </div>
          {/* card */}
          <div className="card flex flex-row sm:flex-col items-center text-left sm:text-center md:flex-1 md:my-2 p-2 md:p-8" data-aos="fade-up" data-aos-delay="200">
            <div className="icon-wrapper text-xl lg:text-2xl mr-4 sm:m-4">
              <FaRocket />
            </div>
            <div>
              <h3 className="lg:text-2xl sm:pb-2">
                <Trans>Start Building</Trans>
              </h3>
              <p className="lg:text-xl">
                <Trans>
                  Assemble the team based on your problem. Convert dollars to value right away.
                </Trans>
              </p>
            </div>
          </div>
          {/* card */}
          <div className="card flex flex-row sm:flex-col items-center text-left sm:text-center md:flex-1 md:my-2 p-2 md:p-8" data-aos="fade-up" data-aos-delay="400">
            <div className="icon-wrapper text-xl lg:text-2xl mr-4 sm:m-4">
              <FaCubes />
            </div>
            <div>
              <h3 className="lg:text-2xl sm:pb-2">
                <Trans>Iteratively develop</Trans>
              </h3>
              <p className="lg:text-xl">
                <Trans>
                  Continual improvement to develop a tailored, sustainable and scalable solution.
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </SiteBorderStyles>
    </StepsStyles>
  );
}

const StepsStyles = styled.section`
  position: relative;
  .bg-img-wrapper {
    position: absolute;
    bottom: 20px;
    right: -50vw;
    z-index: -1;
  }
  .cards {
    .card:first-child {
      z-index: 3;
      transform: translateX(0);
    }
    .card:nth-child(2) {
      z-index: 2;
      transform: translateY(0);
    }
    .card:last-child {
      z-index: 1;
      transform: translate(0, 0)
    }
  }
  .card {
    border-radius: 10px;
    background: var(--white);
  }
  .icon-wrapper {
    background-color: var(--red);
    padding: 0.75rem 1rem;
    transform: skew(-16deg);
    width: min-content;
    height: min-content;
  }
  svg {
    color: var(--white);
  }
  p {
    color: var(--darkgrey);
  }

  @media (min-width: 768px) {
    .card {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }
    .cards {
      .card:first-child {
        transform: translate(10px, -40px);
      }
      .card:last-child {
        transform: translate(-10px, 40px)
      }
    }
    .icon-wrapper {
      padding: 1rem 1.5rem;
    }
  }
`;
