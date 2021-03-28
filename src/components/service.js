import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import { Trans } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { FaCube, FaChalkboardTeacher } from 'react-icons/fa';


import SiteBorderStyles from '../styles/SiteBorderStyles';

const ServiceStyles = styled.section`
  position: relative;
  .bg-img-wrapper {
    position: absolute;
    bottom: 20px;
    left: -200px;
    width: 100%;
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

export default function Service() {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "bunkers.png" }) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <ServiceStyles>
      <SiteBorderStyles className="flex flex-col">
        {/* section-header */}
        <div className="text-left md:text-center py-4 md:py-16 lg:py-24">
          <h2 className="text-3xl lg:text-4xl">
            <span className="highlight-red">
              <Trans>Customize</Trans>
            </span>
            <Trans> Your Dev Team</Trans>
          </h2>
          <p className="hidden md:block text-xl lg:text-2xl my-4">
            <Trans>We fuel your tech capability with our network of freelancers</Trans>
          </p>
        </div>
        {/* Cards */}
        <div className="flex-grow cards flex flex-col md:flex-row">
          {/* Card */}
          <div className="card my-2 md:m-6 lg:m-12 p-4 md:p-8 flex-1">
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
              <Trans>Consolidate your HR & IT budget</Trans>
              </span>
              <span className="hidden md:inline">
                <Trans> towards direct actions to solve your problems</Trans>
              </span>
              .
            </p>
            <ul className="lg:my-3 lg:text-xl">
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
          <div className="card my-2 md:m-6 lg:m-12 p-4 md:p-8 flex-1">
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
            <ul className="lg:my-3 lg:text-xl">
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
      <div className="bg-img-wrapper">
        <Img
          className="bunkers"
          fluid={data.fileName.childImageSharp.fluid}
          alt="Coderbunker Bunkers" />
      </div>
    </ServiceStyles>
  )
}
