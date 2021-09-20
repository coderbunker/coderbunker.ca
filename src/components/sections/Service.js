import * as React from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';
import { FaCube, FaChalkboardTeacher } from 'react-icons/fa';
import { SiteBorderStyles } from '../../styles/SiteBorderStyles';
import BackgroundImage from '../BackgroundImage';

export default function Service() {
  return (
    <ServiceStyles>
      <SiteBorderStyles className="wrapper">
        {/* section-header */}
        <div className="text-left md:text-center py-4 md:pt-16 lg:pt-24">
          <h2 className="text-2xl lg:text-4xl">
            <span className="highlight-red">
              <Trans>Customize</Trans>
            </span>
            <Trans> Your Dev Team</Trans>
          </h2>
          <p className="hidden md:block text-xl lg:text-2xl my-4">
            <Trans>We fuel your tech capability with our network of freelancers.</Trans>
          </p>
        </div>
        {/* Cards */}
        <div className="flex-grow flex flex-col md:flex-row">
          {/* Card */}
          <div className="card my-2 md:m-6 lg:m-12 p-4 md:p-8 flex-1" data-aos="fade-right" data-aos-delay="200">
            <div className="card-header flex items-center text-xl lg:text-2xl">
              <div className="icon-wrapper">
                <FaCube />
              </div>
              <h3>
                <Trans>Retainer Based Projects</Trans>
              </h3>
            </div>
            <p className="my-3 lg:text-xl">
              <span className="inline">
                <Trans>
                  Consolidate your HR & IT budget towards direct actions to solve your problems.
                </Trans>
              </span>
            </p>
            <ul className="hidden md:block lg:my-3 lg:text-xl">
              <li>
                <Trans>At your pace</Trans>
              </li>
              <li>
                <Trans>Your budget is fully refundable</Trans>
              </li>
              <li>
                <Trans>All expenses are transparent</Trans>
              </li>
            </ul>
          </div>
          {/* Card */}
          <div className="card my-2 md:m-6 lg:m-12 p-4 md:p-8 flex-1" data-aos="fade-up" data-aos-delay="200">
            <div className="card-header flex items-center text-xl lg:text-2xl">
              <div className="icon-wrapper">
                <FaChalkboardTeacher />
              </div>
              <h3>
                <Trans>CTO On-demand</Trans>
              </h3>
            </div>
            <p className="my-3 lg:text-xl">
              <Trans>Help you make informed decisions in choosing the right technology.</Trans>
            </p>
            <ul className="hidden md:block lg:my-3 lg:text-xl">
              <li>
                <Trans>Pay by the hour</Trans>
              </li>
              <li>
                <Trans>Access diverse experts</Trans>
              </li>
            </ul>
          </div>
        </div>
      </SiteBorderStyles>
      <div className="bg-img-wrapper flex">
        <BackgroundImage style={{ width: '40vw' }} imgStyle={{ height: '100%' }} />
        <BackgroundImage style={{ width: '25vw', transform: 'translate(-1vw, 10vw)' }} imgStyle={{ height: 'auto' }} />
        <BackgroundImage style={{ width: '10vw', transform: 'translate(5vw, 10vw)' }} imgStyle={{ height: 'auto' }} />
      </div>
    </ServiceStyles>
  );
}

const ServiceStyles = styled.section`
  position: relative;
  .bg-img-wrapper {
    position: absolute;
    bottom: 5vw;
    left: -5vw;
    z-index: -1;
  }
  .card {
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
