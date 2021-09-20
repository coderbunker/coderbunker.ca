import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Trans } from 'gatsby-plugin-react-i18next';
import { SiteBorderStyles } from '../styles/SiteBorderStyles';

export default function LogoGarden() {
  // query all partnerlogos
  const { allPartnersJson } = useStaticQuery(graphql`{
    allPartnersJson(sort: {fields: logo___base, order: ASC}) {
      nodes {
        id
        name
        website
        logo {
          childImageSharp {
            gatsbyImageData(
              width: 120,
              height: 60,
              placeholder: TRACED_SVG,
              layout: CONSTRAINED,
              transformOptions: {fit: CONTAIN, grayscale: true}
            )
          }
        }
      }
    }
  }`);

  return (
    <LogoGardenStyles>
      <SiteBorderStyles>
        <p className="text-center">
          <Trans>Trusted by these partners and clients</Trans>
        </p>
        <div className="horizontal-scroll-wrapper">
          {allPartnersJson.nodes.map((partner) => (
            <a title={partner.name} href={partner.website} target="_blank" rel="noreferrer" key={partner.id}>
              <GatsbyImage
                image={partner.logo?.childImageSharp.gatsbyImageData}
                imgStyle={{ objectFit: 'contain' }}
                alt={partner.name}
              />
            </a>
          ))}
        </div>
      </SiteBorderStyles>
    </LogoGardenStyles>
  );
}

const LogoGardenStyles = styled.div`
  background-color: var(--lightgrey);
  p {
    color: var(--darkgrey);
  }
  > div {
    padding-top: 1rem;
    padding-bottom: 1rem;
    height: 20vh;
  }
  .horizontal-scroll-wrapper {
    height: 100%;
    max-width: unset;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    > a {
      display: inline-table;
      height: 100%;
      padding: 0 1rem;
      > div {
        display: table-cell;
        vertical-align: middle;
      }
    }
    @media (min-width: 1024px) {
      > a {
        margin: 0 1rem;
      }
      margin: 0 auto;
    }
  }
`;
