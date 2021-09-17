import { graphql } from 'gatsby';
import React from 'react'
import MemberCard from '../components/MemberCard';
import Layout from '../components/layout'
import Seo from '../components/seo';
import styled from 'styled-components';

export default function MemberPageTemplate({ data, pageContext }) {
  const locale = pageContext.language
  const member = data.membersJson[locale]

  return (
    <Layout>
      <Seo title={member.name} />
      <MemberPageStyles>
        <MemberCard member={member} />
      </MemberPageStyles>
    </Layout>
  )
}

const MemberPageStyles = styled.div`
  min-height: calc(100vh - 56px);
  display: grid;
  place-content: center;
  padding: 20px;
`

export const data = graphql`
  query($member: String!) {
    membersJson(en: { name: { eq: $member } }) {
      en {
        name
        title
        linkedin
        website
        github
        image {
          childImageSharp {
            gatsbyImageData(
              width: 360,
              height: 500,
              placeholder: BLURRED,
              layout: CONSTRAINED
            )
          }
        }
        highlights
      }
      fr {
        name
        title
        linkedin
        website
        github
        image {
          childImageSharp {
            gatsbyImageData(
              width: 500,
              placeholder: BLURRED,
              layout: CONSTRAINED
            )
          }
        }
        highlights
      }
    }
  }
`;
