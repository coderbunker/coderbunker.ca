import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

export default function StackedAvatar({ sectionRefs, setTeamIndex, pausedRef }) {
  // Query all team name and image sorted by image file name
  const { allMembersJson } = useStaticQuery(graphql`{
    allMembersJson(sort: {fields: en___image___base, order: ASC}) {
      nodes {
        en {
          name
          image {
            childImageSharp {
              gatsbyImageData(
                width: 75,
                height: 75
                placeholder: BLURRED,
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  }`);

  // handle clicking on the individual avatar
  const handleClick = (ev) => {
    // Pause Observer
    pausedRef.current = true;
    // Update Team Index
    const updatedTeamIndex = parseInt(ev.currentTarget.dataset.team);
    setTeamIndex(updatedTeamIndex);
    // Find Team Section Top
    const top = sectionRefs.current[2].offsetTop;
    // Navigate to the Team Section
    window.scrollTo({ top, behavior: 'smooth' });
    // Un-pause observer effects when completed
    const checkIfScrollCompleted = setInterval(() => {
      if (window.scrollY === top) {
        pausedRef.current = false;
        clearInterval(checkIfScrollCompleted);
      }
    }, 25);
  };

  const members = allMembersJson.nodes.map((member) => member.en);

  return (
    <AvatarsStyles>
      {members.map((member, i) => {
        const zIndex = members.length - i;
        return (
          <button
            type="button"
            data-team={i}
            onClick={handleClick}
            key={`avatar-${member.name}`}
            style={{
              zIndex,
            }}
          >
            <GatsbyImage
              image={member.image?.childImageSharp?.gatsbyImageData}
              className="inline-block rounded-full"
              imgStyle={{ objectPosition: 'top center' }}
              alt={member.name}
            />
          </button>
        );
      })}
    </AvatarsStyles>
  );
}

const AvatarsStyles = styled.div`
  margin: 1rem 0;
  max-width: calc(100vw - 40px);
  overflow-x: scroll;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  > button {
    display: inline-table;
    height: 100%;
    position: relative;

    &:not(:first-child) {
      margin-left: -12px;
    }
    > div {
      display: table-cell;
      vertical-align: middle;
    }
  }
`;
