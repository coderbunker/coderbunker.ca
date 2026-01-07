import React from 'react';
import styled from 'styled-components';

export default function ContactForm() {
  return (
    <ContactWrapper>
      <StyledMailto href="mailto:ca@coderbunker.ca">
        ca@coderbunker.ca
      </StyledMailto>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem;
  width: 100%;
`;

const StyledMailto = styled.a`
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: 800;
  color: var(--red);
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: -4px;
    left: 0;
    background-color: var(--red);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  &:hover {
    color: var(--black);
    
    &:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;
