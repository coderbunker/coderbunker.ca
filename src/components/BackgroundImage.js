import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function BackgroundImage({ style, imgStyle }) {
  const data = useStaticQuery(graphql`{
  fileName: file(relativePath: {eq: "bunker.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 1000,
        placeholder: BLURRED
        layout: CONSTRAINED
      )
    }
  }
}
`);

  return (
    <>
      <GatsbyImage
        image={data.fileName.childImageSharp.gatsbyImageData}
        style={style}
        imgStyle={imgStyle}
        alt="Coderbunker background image"
      />
    </>
  );
}
