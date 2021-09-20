import React, { useState, useEffect } from 'react';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';

import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { ButtonRed } from './Button';

export default function ContactForm() {
  // Address android soft keyboard vh distortion
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);
  const setVhToOriginal = () => {
    const viewport = document.querySelector('meta[name=viewport]');
    if (window.innerHeight < height) {
      document.documentElement.style.setProperty('overflow', 'auto');
      viewport.setAttribute('content', `height=${height}px, width=device-width, initial-scale=1.0`);
    }
  };

  // Form handling
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const encode = (data) => Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.formState }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  // input and textarea focus & blue event: update styling & address UI issues on mobile
  const handleFocus = (e) => {
    setVhToOriginal();

    // disable scroll snap
    document.documentElement.style.setProperty('scroll-snap-type', 'none');

    const elem = e.currentTarget;
    if (elem.nodeName === 'INPUT') {
      const group = elem.parentElement;
      const label = group.firstChild;
      label.classList.add('activated');
      group.classList.add('focused');

      elem.addEventListener('blur', () => {
        // enable scroll snap
        document.documentElement.style.setProperty('scroll-snap-type', 'y mandatory');
        group.classList.remove('focused');
        if (elem.value === '') {
          label.classList.remove('activated');
        }
      });
    } else {
      elem.addEventListener('blur', () => {
        // enable scroll snap
        document.documentElement.style.setProperty('scroll-snap-type', 'y mandatory');
      });
    }
  };

  const { t } = useTranslation();

  return (
    <ContactFormStyles
      onSubmit={handleSubmit}
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="text-lg p-4 sm:p-8"
    >
      <div className="md:flex">
        <div className="flex-1 form-group mb-2 md:mb-4 md:mr-4">
          <label htmlFor="name">
            <Trans>Name</Trans>
          </label>
          <div className="icon-wrapper">
            <BsFillPersonFill />
          </div>
          <input
            type="text"
            name="name"
            onFocus={handleFocus}
            onChange={handleChange}
            value={formState.name}
            id="name"
          />
        </div>
        <div className="flex-1 form-group mb-2 md:mb-4">
          <label htmlFor="email">
            <Trans>Email</Trans>
          </label>
          <div className="icon-wrapper">
            <AiOutlineMail />
          </div>
          <input
            type="text"
            name="email"
            onFocus={handleFocus}
            onChange={handleChange}
            value={formState.email}
            id="email"
          />
        </div>
      </div>
      <textarea
        name="message"
        rows="3"
        placeholder={t('Message')}
        className="mb-2 md:mb-4"
        onFocus={handleFocus}
        onChange={handleChange}
        value={formState.message}
      />
      <input type="hidden" name="form-name" value="contact" />
      <ButtonRed type="submit" text={t('Send')} style={{ float: 'right' }} />
    </ContactFormStyles>
  );
}

const ContactFormStyles = styled.form`
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.5);
  .form-group {
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid var(--lightgrey);
    label {
      background: var(--white);
      position: absolute;
      left: 3rem;
      color: var(--darkgrey);
      transition: all 0.5s ease;
    }
    &.focused {
      box-shadow: 0 0 10px rgba(255, 0 , 0 , 0.2);
    }
    label.activated {
      transform: translate(-2rem, -1.5rem) scale(0.8, 0.8);
      color: var(--black);
    }
    .icon-wrapper {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-content: center center;
    }
    input {
      width: 100%;
      padding: 0.5rem;
      &:focus {
        outline: none;
      }
    }
  }
  textarea {
    padding: 1rem;
    border: 1px solid var(--lightgrey);
    width: 100%;

  }
  textarea:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(255, 0 , 0 , 0.2);
  }
  textarea::placeholder {
    color: var(--darkgrey);
  }
`;
