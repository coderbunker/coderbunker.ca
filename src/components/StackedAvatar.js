import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

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
    <div className="py-8 flex">
      {members.map((member, i) => {
        const zIndex = members.length - i;
        const translateX = i * -30;
        return (
          <button
            data-team={i}
            onClick={handleClick}
            key={`avatar-${member.name}`}
            style={{
              width: '75px',
              height: '75px',
              zIndex: `${zIndex}`,
              border: '1px solid var(--white)',
              borderRadius: '50%',
              background: 'var(--white)',
              transform: `translateX(${translateX}%)`,
              position: 'relative',
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
      }).slice(0, 7)}
      {/* TODO: handle representation for members with count above 7 */}
    </div>
  );
}
