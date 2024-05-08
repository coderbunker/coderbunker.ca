import React from 'react';
import styled from 'styled-components';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

function CallToAction() {
  const { t } = useTranslation();

  return (
    <ButtonStyle>
      <a href={t('https://cal.com/rngadam')} target="_blank" rel="noreferrer" className="px-4 md:px-6 py-2 text-lg md:text-xl">
        <Trans>Retain Us</Trans>
      </a>
    </ButtonStyle>
  );
}

function ButtonRed({
  type, text, className, style,
}) {
  return (
    <ButtonStyle>
      <button
        type={type === 'submit' ? 'submit' : 'button'}
        className={`px-4 md:px-6 py-2 text-lg md:text-xl ${className || ''}`}
        style={style}
      >
        {text}

      </button>
    </ButtonStyle>
  );
}

export { CallToAction, ButtonRed };

const ButtonStyle = styled.div`
  transform: skew(-16deg);
  a, button {
    white-space: nowrap;
    display: block;
    background-color: var(--red);
    color: var(--white);
    transition: rotate 0.5s ease;
    letter-spacing: 1px;
    &:hover {
      cursor: pointer;
      transform: rotate(-8deg);
      color: var(--white) !important;
    }
  }
`;
