import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import CarouselCard from './CarouselCard';

export default function Carousel({ teamIndex, setTeamIndex, locale }) {
  // Query all team member info
  const { allMembersJson } = useStaticQuery(graphql`{
    allMembersJson(sort: {fields: en___image___base, order: ASC}) {
      nodes {
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
  }`);

  const members = allMembersJson.nodes;
  const membersLocalized = members.map((member) => member[locale]);

  return (
    <>
      {membersLocalized.map((member, index) => (
        <CarouselCard
          member={member}
          key={member.github}
          index={index}
          count={members.length}
          teamIndex={teamIndex}
          setTeamIndex={setTeamIndex}
        />
      ))}
    </>
  );
}
