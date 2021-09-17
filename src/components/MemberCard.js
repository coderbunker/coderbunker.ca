import * as React from "react";
import styled from 'styled-components';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { MdWeb } from 'react-icons/md'
import { GatsbyImage } from "gatsby-plugin-image";

export default function MemberCard({ member }) {
  const { name, title, image, linkedin, github, website, highlights } = member

  return (
    <MemberCardStyles>
      <div className="flex flex-1 md:flex-row-reverse overflow-hidden bg-peach md:bg-white">
        <GatsbyImage
          image={image?.childImageSharp?.gatsbyImageData}
          className="w-1/3-vw h-1/3-vw md:w-1/3 md:h-auto"
          imgStyle={{ objectPosition: `top center` }}
          alt={name}
        />
        <div className="p-2 md:p-8 w-2/3">
          <div className="flex flex-col md:flex-row justify-between h-full md:h-auto">
            <div>
              <h1 className="text-sm sm:text-2xl sm:mb-2">{name}</h1>
              <p className="text-sm sm:text-xl">{title}</p>
            </div>
            <div className="text-sm sm:text-2xl md:text-3xl flex">
              {
                linkedin &&
                <a href={linkedin} aria-label="social media icon Linkedin" target="_blank" rel="noreferrer"><FiLinkedin className="mr-3"/></a>
              }
              {
                github &&
                <a href={github} aria-label="social media icon Github" target="_blank" rel="noreferrer"><FiGithub className="md:ml-3"/></a>
              }
              {
                website &&
                <a href={website} aria-label="social media icon Website" target="_blank" rel="noreferrer"><MdWeb className="md:ml-3"/></a>
              }
            </div>
          </div>
          {/* Highlights for large screens, show all */}
          <ul className="py-4 hidden md:block">
            {highlights.map(hl => <li key={hl}>{hl}</li>)}
          </ul>
        </div>
      </div>
      {/* highlights for small screen, show first few */}
      <ul className="text-sm py-4 block md:hidden">
        {highlights.map((hl, i) => <li key={hl + i}>{hl}</li>)}
      </ul>
    </MemberCardStyles>
  );
}

const MemberCardStyles = styled.div`
  margin: 120px auto;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  max-width: 960px;
  overflow: hidden;
  ul {
    list-style-type: "→";
    padding-left: 2rem;
    li {
      padding-left: 0.5rem;
    }
  }
  p, svg {
    color: var(--darkgrey);
  }
  a svg:hover {
      color: var(--black);
  }
`;
